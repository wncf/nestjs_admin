export interface role {
  role_name: string
  role_desc: string
}
export interface user {
  user_name: string
  email: string
  rid: number
  password: string
}
export interface menu {
  menu_name: string
  menu_path: string
  parent_id?: number
  menu_icon: string
}
export interface roleMenu {
  enable?: boolean
  rid: number
  mid: number
}
