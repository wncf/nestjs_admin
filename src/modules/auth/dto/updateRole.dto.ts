import { Transform } from 'class-transformer'
import { IsEistRule } from 'src/rules/is-exist.rule'
import { ValidationPipe } from '@nestjs/common'
import { IsNotEmpty, IsEmail, Length, IsNumber } from 'class-validator'

export class updateRoleDto {
  @IsEistRule('user.id', { message: '当前用户不存在' })
  @IsNumber({}, { message: '必须为数字类型' })
  @Transform(({ value }) => +value)
  uid: number

  @IsEistRule('role.id', { message: '当前角色不存在' })
  @IsNumber({}, { message: '必须为数字类型' })
  @Transform(({ value }) => +value)
  rid: number
}
