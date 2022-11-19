import { isIntIsNull } from '@/common/decorator/dto.decorator'
import { IsEistRule } from '@/rules/is-exist.rule'
import { IsNotExistsRule } from '@/rules/is-not-exists.rule'

export class RoleMenuIdDto {
  @isIntIsNull()
  @IsEistRule('role', { message: '当前角色id不存在' })
  id: number
}
