import { JwtStartegy } from './jwt.startegy'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get('TOKEN_SECRET_KEY'),
          signOptions: {
            expiresIn: '100d',
          },
        }
      },
    }),
  ],
  providers: [AuthService, JwtStartegy],
  controllers: [AuthController],
})
export class AuthModule {}
