import { Transform } from 'class-transformer'
import { IsNumber } from 'class-validator'
import { IsEistRule } from 'src/rules/is-exist.rule'

export class getUserByIdDto {
  @IsEistRule('user.id', { message: '当前用户不存在' })
  @IsNumber({}, { message: '必须为数字类型' })
  @Transform(({ value }) => +value)
  id: number
}
