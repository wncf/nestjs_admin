import { hindleMenuTree } from '@/utils'
import { getUserByIdDto } from './dto/userInfo.dto'
import { updateRoleDto } from './dto/updateRole.dto'
import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt/dist'
import { Login, registerUser } from '@/modules/auth/dto/auth.dto'
import { crpytPasswordUtil, decryptIsPassword } from 'src/utils'
import { PrismaService } from '../prisma/prisma.service'
import { User } from '@prisma/client'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async register(userData: registerUser) {
    const password = crpytPasswordUtil(userData.password)
    const user = await this.prisma.user.create({
      data: {
        user_name: userData.user_name,
        email: userData.email,
        password,
        rid: 2,
      },
    })
    if (!user) throw new BadRequestException({ message: ['未知错误'] })
    const token = await this.token(user)
    return { token }
  }
  async Login(dto: Login) {
    const user = await this.prisma.user.findFirst({
      where: { email: dto.email, user_name: dto.user_name },
      include: { rids: true },
    })
    if (!user) throw new BadRequestException({ message: ['用户名或者密码错误'] })

    if (!decryptIsPassword(dto.password, user.password))
      throw new BadRequestException({ message: ['用户名或者密码错误'] })
    const token = await this.token(user)

    return { token }
  }
  async token(user: User): Promise<string> {
    return this.jwt.signAsync({
      user_name: user.user_name,
      sub: user.id,
      email: user.email,
    })
  }
  async updateUserRole(userData: updateRoleDto) {
    const res = await this.prisma.user.update({
      where: { id: +userData.uid },
      data: {
        rid: +userData.rid,
      },
    })
    return res ? res.id : false
  }
  async getUserById(data: getUserByIdDto) {
    return await this.prisma.user.findUnique({ where: { id: data.id }, include: { rids: true } })
  }
  async getAuthMenu(rid: number) {
    const authMenu = await this.prisma.roleMenu.findMany({
      where: { rid: rid },
      include: { mids: true },
    })
    return hindleMenuTree(authMenu.map((item) => item.mids))
  }
}
