import { PrismaService } from '../modules/prisma/prisma.service'
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator'

/*
检查一个表里一个字段的值，除了自己，是否还有其他的，需要当前的id字段
*/
export function IsUniue(table: string, validationOptions?: ValidationOptions) {
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
