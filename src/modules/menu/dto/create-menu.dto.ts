import { IsDiyReg } from '@/rules/is-diyReg.rule'
import { IsEistRule } from '@/rules/is-exist.rule'
import { IsNotExistsRule } from '@/rules/is-not-exists.rule'
import { Transform } from 'class-transformer'
import { IsNotEmpty, IsNumberString } from 'class-validator'

export class CreateMenuDto {
  @IsNotEmpty({ message: '菜单名称不能为空' })
  @IsNotExistsRule('menu', { message: '菜单名称已经存在' })
  menu_name: string

  @IsNotEmpty({ message: '菜单路径不能为空' })
  @IsDiyReg(/\w/, { message: '菜单路径必须为英文字母或者下划线' })
  @IsNotExistsRule('menu', { message: '菜单路径已经存在' })
  menu_path: string

  @IsEistRule('menu.id')
  @Transform(({value}) => +value)
  parent_id: number

  @IsNotEmpty({ message: '菜单图标不能为空' })
  menu_icon: string
}
