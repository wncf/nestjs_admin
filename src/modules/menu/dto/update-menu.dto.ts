import { isIntIsNull } from '@/common/decorator/dto.decorator'
import { IsDiyReg } from '@/rules/is-diyReg.rule'
import { IsEistRule } from '@/rules/is-exist.rule'
import { IsUnique } from '@/rules/is-unique.rule'
import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsNumberString } from 'class-validator'
export class MenuIdDto {
  @isIntIsNull()
  @IsEistRule('menu', { message: '当前菜单id不存在' })
  id: number
}

export class UpdateMenuDto {
  @isIntIsNull()
  @IsEistRule('menu', { message: '当前菜单id不存在' })
  id: number

  @IsNotEmpty({ message: '菜单名称不能为空' })
  @IsUnique('menu', { message: '菜单名称已经存在' })
  menu_name: string

  @IsNotEmpty({ message: '菜单路径不能为空' })
  @IsDiyReg(/\w/, { message: '菜单路径必须为英文字母或者下划线' })
  @IsUnique('menu', { message: '菜单路径已经存在' })
  menu_path: string

  @IsNotEmpty({ message: '菜单图标不能为空' })
  menu_icon: string
}
