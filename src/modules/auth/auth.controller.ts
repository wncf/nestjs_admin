import { Auth } from '@/common/decorator/auth.decorator'
import { User } from '@/common/decorator/user.decorator'
import { Login, registerUser } from '@/modules/auth/dto/auth.dto'
import { Roles } from '@/types/role.enum'
import { Body, ClassSerializerInterceptor, Controller, Get, Post, UseInterceptors } from '@nestjs/common'
import { Param, Query, Put } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { User as UserType } from '@prisma/client'
import { AuthService } from './auth.service'
import { updateRoleDto } from './dto/updateRole.dto'
import { getUserByIdDto } from './dto/userInfo.dto'
import { userInfoEntities } from './entities/userInfo.entity'
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private configService: ConfigService) {}

  @Post('login')
  Login(@Body() dto: Login) {
    return this.authService.Login(dto)
  }
  @Post('register')
  register(@Body() userData: registerUser) {
    return this.authService.register(userData)
  }

  @Auth(Roles.ADMIN)
  @Post('/role')
  updateRole(@Body() userData: updateRoleDto) {
    return this.authService.updateUserRole(userData)
  }

  @Auth(Roles.ADMIN)
  @Get('/UserInfo/:id')
  @UseInterceptors(ClassSerializerInterceptor)
  async UserInfo(@Param() data: getUserByIdDto) {
    return new userInfoEntities(await this.authService.getUserById(data))
  }
  @Get('/info')
  @Auth()
  getUserInfo(@User() user: UserType) {
    return user
  }
  @Get('/menu')
  @Auth()
  getUserMenu(@User() user: UserType) {
    return this.authService.getAuthMenu(user.rid)
  }
}
