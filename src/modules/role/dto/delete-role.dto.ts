import { IsEistRule } from '@/rules/is-exist.rule'
import { IsUniue } from '@/rules/is-unique.rule'
import { Transform } from 'class-transformer'
import { IsAlpha, IsNotEmpty, IsNumber, Length } from 'class-validator'

export class deleteRoleDto {
  @IsNumber({}, { message: '角色id类型错误' })
  @Transform(({ value }) => +value)
  @IsEistRule('role', { message: '当前角色不存在' })
  id: string
}
