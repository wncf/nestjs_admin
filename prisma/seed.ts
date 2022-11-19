import { Prisma, PrismaClient } from '@prisma/client'
import { staticData } from './static/index'
const prisma = new PrismaClient()

type Arryloop = {
  table: string
  values: any[]
}[]
const Fun = async (arry: Arryloop) => {
  for (let item of arry) {
    for (let i = 0; i < item.values.length; i++) {
      try {
        await prisma[item.table].create({ data: item.values[i] })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
Fun([
  { table: 'role', values: staticData.roles },
  { table: 'user', values: staticData.users },
  { table: 'menu', values: staticData.menus },
  { table: 'roleMenu', values: staticData.roleMenus },
])

// bootstrapDb(prisma)
