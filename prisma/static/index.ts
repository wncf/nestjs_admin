import { crpytPasswordUtil } from '../../src/utils'


// 初始数据
class Data {
  users() {
    return [
      {
        user_name: 'admin',
        email: 'xxxxxx1@qq.com',
        rid: 1,
        password: crpytPasswordUtil('123456'),
      },
      {
        user_name: '小美',
        email: 'xxxxxx2@qq.com',
        rid: 2,
        password: crpytPasswordUtil('123456'),
      },
    ]
  }
  Roles() {
    return [
      {
        role_name: 'admin',
        role_desc: '超级管理员，拥有一切权限',
      },
      {
        role_name: 'ordinary',
        role_desc: '普通用户，无权限登录后台',
      },
    ]
  }
}

export const staticData = new Data()