import { PrismaService } from './../modules/prisma/prisma.service'
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

/*
检查一个表下某个字段的值是否不存在
不存在 通过
存在 抛出错误
*/
export function IsNotExistsRule(table: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsNotExistsRule',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          if (!value) return true
          const prisma = new PrismaService()
          const res = await prisma[table].findUnique({
            where: {
              [propertyName]: args.value,
            },
          })
          if (res?.id) return false
          return true
        },
      },
    })
  }
}
