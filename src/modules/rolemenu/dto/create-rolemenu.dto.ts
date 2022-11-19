import { isIntIsNull } from '@/common/decorator/dto.decorator'
import { IsEistRule } from '@/rules/is-exist.rule'
import { IsArray } from 'class-validator'

export class CreateRolemenuDto {}

export class AdmMenuDto {
  @isIntIsNull()
  @IsEistRule('role.id', { message: '当前角色id不存在' })
  rid: number

  @IsArray({ message: '必须为数字数组' })
  menus: number[]
}
