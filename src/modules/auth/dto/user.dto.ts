import { ValidationPipe } from '@nestjs/common'
import { IsNotEmpty, IsEmail, Length } from 'class-validator'

export default class createUser {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(4, 15, { message: '用户名4~15' })
  user_name: string
  @IsEmail({},{message:"邮箱格式不正确或不存在"})
  email: string
}

