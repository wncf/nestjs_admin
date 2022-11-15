import { ClassSerializerInterceptor, UsePipes, ValidationPipe } from '@nestjs/common'
import { NestFactory, Reflector } from '@nestjs/core'
import { Validate } from './common/pipes/validate'
import { AppModule } from './app.module'
import { ValidateExceptionFilter } from './common/filter/vallidate.filter'
import { TransformInterceptor } from './common/TransformInterceptor/RequestTime.transform'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  // 异常管道与异常过滤器
  app.useGlobalPipes(new Validate({ whitelist: true, stopAtFirstError: true }))
  app.useGlobalFilters(new ValidateExceptionFilter())
  // 拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useStaticAssets('uploads', { prefix: '/uploads' })

  // 字段序列化
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)))
  await app.listen(3000, () => {
    console.log('成功')
  })
}
bootstrap()
