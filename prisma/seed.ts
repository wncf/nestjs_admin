import { PrismaClient } from '@prisma/client'
import { staticData } from './static/index'
const prisma = new PrismaClient()

const Fun = async (arry: any[], fun: Function) => {
  for (let i = 0; i < arry.length; i++) {
    await fun(arry[i])
  }
}

const bootstrapDb = async (P: PrismaClient) => {
  await Fun(staticData.Roles(), async (item) => {
    await prisma.role.create({
      data: item,
    })
  }),
  await Fun(staticData.users(), async (item) => {
    await prisma.user.create({
      data: item,
    })
  })
}

bootstrapDb(prisma)
