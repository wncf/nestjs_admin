import { isInt, registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'
import { PrismaService } from '../modules/prisma/prisma.service'
/*
检查一个表里一个字段的值，除了自己，是否还有其他的，需要当前的id字段
*/
export function IsUnique(table: string, validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsUniue',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [table],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          if (!value) return true
          if (!isInt(+args.object['id'])) return true
          if (args.object['id']) return true
          const prisma = new PrismaService()
          const res = await prisma[table].findMany({
            where: {
              [propertyName]: args.value,
              id: {
                not: +args.object['id'],
              },
            },
          })
          if (res.length) return false
          return true
        },
      },
    })
  }
}
