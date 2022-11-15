import { PrismaService } from '../prisma/prisma.service'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStartegy extends PassportStrategy(Strategy, 'jwt') {
  constructor(ConfigService: ConfigService, private prisma: PrismaService) {
    super({
      // 解析用户提交的Bearer Token headers 数据
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 加密用的secret
      secretOrKey: ConfigService.get('TOKEN_SECRET_KEY'),
    })
  }
  async validate({ sub: id }) {
    const res = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        user_name: true,
        email: true,
        avatar_url: true,
        rid: true,
        rids: {
          select: {
            role_name: true,
          },
        },
      },
    })
    return res
  }
}
