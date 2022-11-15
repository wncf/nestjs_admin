import { createParamDecorator, ExecutionContext, Param } from '@nestjs/common'
import { Validate } from '../pipes/validate'

export const ParamsIDdto = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  console.log(ctx)

  return Param(
    new Validate({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      forbidNonWhitelisted: true,
    }),
  )
})
