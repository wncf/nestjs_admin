import { pagesDto, sortValueType } from '../common/dto/common.dto'
import bcrypt from 'bcryptjs'
import { Menu, RoleMenu } from '@prisma/client'
const crpytPasswordUtil = (password: string): string => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

const decryptIsPassword = (hash: string, password: string): boolean => {
  return bcrypt.compareSync(hash, password)
}
/**
 *
 * @param {*} all
 * @returns 类型String
 */

const Typeing = (value: any): string => {
  return Object.prototype.toString.call(value).slice(8, -1).toLowerCase()
}
// 分页格式化
const hindlePages = (data: pagesDto, args?) => {
  const AND = []
  const skip = (data.pageNo - 1) * data.pageSize
  const take = data.pageSize
  const orderBy: { id?: sortValueType; [propname: string]: sortValueType } = {}
  // search
  for (let item in data.search) {
    const args = item.split('_')[0]
    const proptName = item.replace(`${args}_`, '')
    const mark = proptName === 'id' ? 'equals' : 'contains'
    AND.push({
      [proptName]: {
        [`${mark}`]: data.search[item],
      },
    })
  }
  // sort
  if (Object.keys(data.sort).length === 0) {
    orderBy.id = sortValueType.DESC
  } else {
    const key = Object.keys(data.sort)[0]
    orderBy[key] = data.sort[key]
  }
  // skip

  return { skip, take, where: { AND }, orderBy }
}
// 树形菜单格式化
const hindleMenuTree = (data: Menu[]) => {
  const result = []
  const map = {}
  data.forEach((item) => {
    map[item.id] = item
  })
  // console.log(map);
  data.forEach((item) => {
    const parent = map[item.parent_id]
    if (parent) {
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      return result.push(item)
    }
  })
  return result
}
// 数组增删同步参数序列化 
// 数组1 存在需要保留数组
// 数组2 存在需要删除的数组
interface paramsOrderReturnType {
  adds: number[]
  dels: number[]
}
const paramsOrder = (arr1: number[], arr2: number[]): paramsOrderReturnType => {
  const exitsMids = arr1.filter((i) => !arr2.includes(i))
  const deleteMids = arr2.filter((i) => !arr1.includes(i))
  return {
    adds: exitsMids,
    dels: deleteMids,
  }
}
export { crpytPasswordUtil, decryptIsPassword, Typeing, hindlePages, hindleMenuTree, paramsOrder }
