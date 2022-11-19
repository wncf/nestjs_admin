import { PrismaService } from '../modules/prisma/prisma.service'
import { isInt, isNumberString, registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

/*
检查一个表下某个字段(一般为id)的值是否存在
存在 通过
不存在 抛出异常
*/
export function IsEistRule(table: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsEistRule',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          if (!value) return true
          if (!isNumberString(value)) return true
          const customPropertyName = table.split('.')[1] || ''
          const customTable = customPropertyName ? table.split('.')[0] : table

          const prisma = new PrismaService()
          const res = await prisma[customTable].findUnique({
            where: {
              [customPropertyName || propertyName]: +args.value,
            },
          })
          if (res && res.id) return true
          return false
        },
      },
    })
  }
}
