import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { User, Role } from '@prisma/client'
import { Observable } from 'rxjs'
import { Roles } from '@/types/role.enum'
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest().user as User & { rids: Role }
    const user_role = user.rids.role_name

    // 通过反射获取auth装饰器传入允许通过的角色
    const roles = this.reflector.getAllAndMerge<Roles[]>('roles', [context.getHandler(), context.getClass()])
    return roles.length ? roles.some((item) => user_role === item) : true
  }
}
