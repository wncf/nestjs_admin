import { IsNotExistsRule } from '@/rules/is-not-exists.rule'
import { IsUniue } from '@/rules/is-unique.rule'
import { IsAlpha, IsNotEmpty, Length } from 'class-validator'

export class CreateRoleDto {
  @IsNotExistsRule('role', { message: '角色名已经存在' })
  @IsNotEmpty({ message: '角色名称不能为空' })
  role_name: string
}
