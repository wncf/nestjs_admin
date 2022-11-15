import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './modules/auth/auth.module'
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { UploadModule } from './modules/upload/upload.module';
import { RoleModule } from './modules/role/role.module';
import app from './config/app.config'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [app],
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    UploadModule,
    RoleModule,
  ],
  providers: [],
})
export class AppModule {}
