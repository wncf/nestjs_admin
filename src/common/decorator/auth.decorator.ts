import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Roles } from '@/types/role.enum'
import { RoleGuard } from '@/common/guard/role.guard'


export function Auth(...roles: Roles[]) {
  return applyDecorators(SetMetadata('roles', roles), UseGuards(AuthGuard('jwt'), RoleGuard))
}
