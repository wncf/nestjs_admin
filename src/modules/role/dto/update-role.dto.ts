import { IsUniue } from '@/rules/is-unique.rule'
import { IsNotEmpty } from 'class-validator'

export class UpdateRoleDto {
  @IsNotEmpty({ message: '角色id不能为空' })
  id: number

  @IsNotEmpty({ message: '角色描述不能为空' })
  role_desc: string
  
  @IsNotEmpty({ message: '角色名称不能为空' })
  @IsUniue('role', { message: '角色名称已经存在' })
  role_name: string
}
