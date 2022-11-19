import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

/*
给定一个正则对当前参数进行校验
*/
export function IsDiyReg(reg: RegExp, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsDiyReg',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [reg],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          return reg.test(value)
        },
      },
    })
  }
}
