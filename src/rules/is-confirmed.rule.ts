import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

@ValidatorConstraint()
export class ISConfirmed implements ValidatorConstraintInterface {
  async validate(value: string, args: ValidationArguments) {
    return value === args.object['confirmed_' + args.property]
  }
  defaultMessage(args: ValidationArguments) {
    return '比对失败'
  }
}
