import { Transform } from 'class-transformer'
import { IsIn, IsInt } from 'class-validator'
interface searchType {
  [propname: string]: string
}

export enum sortValueType {
  'DESC' = 'desc',
  'ASC' = 'asc',
}
export interface sortType {
  [propname: string]: sortValueType
}
export class pagesDto {
  @IsInt()
  pageNo: number

  @IsInt()
  pageSize: number

  sort: sortType

  search: searchType
}
