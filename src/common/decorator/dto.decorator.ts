import { applyDecorators } from '@nestjs/common'
import { IsNumberString } from 'class-validator'
export function isIntIsNull() {
  return applyDecorators(
    IsNumberString(
      {},
      {
        message: ({ value }) => {
          if (!value) return '当前id不存在'
          return '当前id类型错误'
        },
      },
    ),
  )
}
