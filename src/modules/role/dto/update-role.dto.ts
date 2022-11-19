import { isIntIsNull } from '@/common/decorator/dto.decorator'
import { IsEistRule } from '@/rules/is-exist.rule'
import { IsUnique } from '@/rules/is-unique.rule'
import { IsNotEmpty, isNumberString, IsNumber, IsInt } from 'class-validator'

export class UpdateRoleDto {
  @isIntIsNull()
  @IsEistRule('menu', { message: '当前菜单id不存在' })
  id: number

  @IsNotEmpty({ message: '角色描述不能为空' })
  role_desc: string

  @IsNotEmpty({ message: '角色名称不能为空' })
  @IsUnique('role', { message: '角色名称已经存在' })
  role_name: string
}
