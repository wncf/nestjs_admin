import { PrismaService } from './../prisma/prisma.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}
  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.role.create({
      data: createRoleDto,
    })
  }

  async findAll() {
    return await this.prisma.role.findMany()
  }

  async update(updateRoleDto: UpdateRoleDto) {
    const { id, ...data } = updateRoleDto
    return await this.prisma.role.update({ where: { id: +id }, data })
  }

  async remove(id: number) {
    const findUser = await this.prisma.user.findMany({ where: { rid: id } })
    if (findUser.length) {
      throw new BadRequestException({ message: ['还有用户绑定该角色，无法删除'] })
    }
    return this.prisma.role.delete({ where: { id } })
  }
}
