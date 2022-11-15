import { ConfigService } from '@nestjs/config'
import { PrismaClient } from '@prisma/client'
import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import { Typeing } from '@/utils'
@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    if (new ConfigService().get('NODE_ENV') === 'development') {
      // 开发模式下打印日志
      super({ log: ['query', 'warn', 'error'] })
      this.DateFormat()
    } else {
      super()
      this.DateFormat()
    }
  }
  DateFormat() {
    this.$use(async (params, next) => {
      const result = await next(params)
      if (!result) return result
      const { create_at, update_at } = result
      if (create_at) {
        result.create_at = dayjs(create_at).format('YYYY-MM-DD HH:mm:ss')
      }
      if (update_at) {
        result.update_at = dayjs(update_at).format('YYYY-MM-DD HH:mm:ss')
      }
      return result
    })
  }
}
