import { ValidationPipe } from '@nestjs/common'
import { IsNotEmpty, IsEmail, Length, isNotEmpty, validate, Validate } from 'class-validator'
import { ISConfirmed } from 'src/rules/is-confirmed.rule'
import { IsNotExistsRule } from 'src/rules/is-not-exists.rule'

export  class registerUser {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(4, 15, { message: '用户名4~20' })
  @IsNotExistsRule('User', { message: '用户名已经存在' })
  user_name: string

  @IsNotEmpty({ message: '密码不能为空' })
  @Validate(ISConfirmed, { message: '两次输入的密码不一致' })
  password: string

  @IsNotEmpty({ message: '重复密码不能为空' })
  confirmed_password: string

  @IsEmail({}, { message: '邮箱格式不正确或不存在' })
  @IsNotExistsRule('User', { message: '邮箱已经存在' })
  email: string
}

export  class Login {
  @IsNotEmpty({ message: '用户名不能为空' })
  @Length(4, 15, { message: '用户名4~15' })
  user_name: string

  @IsNotEmpty({ message: '密码不能为空' })
  password: string


  @IsEmail({}, { message: '邮箱格式不正确或不存在' })
  email: string
}
