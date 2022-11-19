## 基于nestjs 后台管理系统

基于rabc进行单角色权限控制
封装分页，搜索，排序功能接口参数处理
封装多个dto异步验证装饰器，例如在更新，删除前验证id的真实性
合并token鉴权与角色验证装饰器，非可通过的角色访问接口时报403


接口预览：   [接口文档](https://console-docs.apipost.cn/preview/cf3a6b43a300095a/4c88b6061af0a97c)

安装步骤
1. 克隆本项目
2. 安装依赖
3. 将.env.example修改为.env文件，并修改成自己的mysql DATABASE_URL与TOKEN_SECRET_KEY
4. 执行 `yarn prisma migrate dev` 将模型创建成迁移文件并进行sql迁移
5. 执行`yarn prisma db seed ` 执行初始数据填充
6. 执行`yarn dev` 启动项目 