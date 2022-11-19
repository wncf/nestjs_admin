

## 基于nestjs 的REST风格的api脚手架

接口预览：   [接口文档](https://console-docs.apipost.cn/preview/cf3a6b43a300095a/4c88b6061af0a97c)

安装步骤
1. 克隆本项目
2. 安装依赖
3. 将.env.example修改为.env文件，并修改成自己的mysql DATABASE_URL与TOKEN_SECRET_KEY
4. 执行 `yarn prisma migrate dev` 将模型创建成迁移文件并进行sql迁移
5. 执行`yarn prisma db seed ` 执行初始数据填充
6. 执行`yarn dev` 启动项目 