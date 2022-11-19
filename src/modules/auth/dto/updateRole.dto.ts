import { Transform } from 'class-transformer'
import { IsEistRule } from 'src/rules/is-exist.rule'
import { ValidationPipe } from '@nestjs/common'
import { IsNotEmpty, IsEmail, Length, IsNumber, IsNumberString } from 'class-validator'
import { isIntIsNull } from '@/common/decorator/dto.decorator'

export class updateRoleDto {
  @isIntIsNull()
  @IsEistRule('user.id', { message: '当前用户不存在' })
  uid: number

  @isIntIsNull()
  @IsEistRule('role.id', { message: '当前角色不存在' })
  rid: number
}
