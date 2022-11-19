import { crpytPasswordUtil } from '../../src/utils'
import { user, role, menu, roleMenu } from './staticType'

// 初始数据填充

class Datas {
  readonly users: user[]
  readonly roles: role[]
  readonly menus: menu[]
  readonly roleMenus: roleMenu[]
  constructor() {
    this.users = [
      {
        user_name: 'admin',
        email: 'xxxxxx1@qq.com',
        rid: 1,
        password: crpytPasswordUtil('123456'),
      },
      {
        user_name: 'xiaomei',
        email: 'xiaomei@qq.com',
        rid: 2,
        password: crpytPasswordUtil('123456'),
      },
      {
        user_name: 'wang_teacher',
        email: 'wang_teacher@qq.com',
        rid: 3,
        password: crpytPasswordUtil('123456'),
      },
      {
        user_name: 'li_student',
        email: 'li_student@qq.com',
        rid: 4,
        password: crpytPasswordUtil('123456'),
      },
    ]
    this.roles = [
      {
        // 预设角色 超级管理员
        role_name: 'admin',
        role_desc: '超级管理员，拥有一切权限',
      },
      {
        // 预设角色 普通用户
        role_name: 'ordinary',
        role_desc: '普通用户',
      },
      {
        role_name: 'teacher',
        role_desc: '教师，测试角色',
      },
      {
        role_name: 'student',
        role_desc: '学生，测试角色',
      },
    ]
    this.menus = [
      {
        menu_name: '系统管理',
        menu_icon: 'system',
        menu_path: '/system',
      },
      {
        menu_name: '用户管理',
        menu_icon: 'user',
        menu_path: '/system/user',
        parent_id: 1,
      },
      {
        menu_name: '角色管理',
        menu_icon: 'role',
        menu_path: '/system/role',
        parent_id: 1,
      },
      {
        menu_name: '菜单管理',
        menu_icon: 'menu',
        menu_path: '/system/menu',
        parent_id: 1,
      },
      {
        menu_name: '班级管理',
        menu_icon: 'class',
        menu_path: '/class',
      },
      {
        menu_name: '学生检索',
        menu_icon: 'student',
        menu_path: '/class/student',
        parent_id: 5,
      },
      {
        menu_name: '成绩查询',
        menu_icon: 'score',
        menu_path: '/class/score',
        parent_id: 5,
      },
      {
        menu_name: '课程查询',
        menu_icon: 'student',
        menu_path: '/student_course',
        parent_id: 999,
      },
      {
        menu_name: '资料提交',
        menu_icon: 'class',
        menu_path: '/student_info',
        parent_id: 999,
      },
    ]
    this.roleMenus = [
      // 预设菜单权限
      {
        mid: 1,
        rid: 1,
      },
      {
        mid: 2,
        rid: 1,
      },
      {
        mid: 3,
        rid: 1,
      },
      {
        mid: 4,
        rid: 1,
      },
      {
        mid: 5,
        rid: 3,
      },
      {
        mid: 6,
        rid: 3,
      },
      {
        mid: 7,
        rid: 3,
      },
      {
        mid: 8,
        rid: 4,
      },
      {
        mid: 9,
        rid: 4,
      },
    ]
  }
}
export const staticData = new Datas()
