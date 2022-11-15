import { Auth } from '@/common/decorator/auth.decorator'
import { Roles } from '@/types/role.enum'
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { deleteRoleDto } from './dto/delete-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'
import { RoleService } from './role.service'

@Controller('role')
@Auth(Roles.ADMIN)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}
  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto)
  }
  @Get()
  findAll() {
    return this.roleService.findAll()
  }
  @Post('/update')
  update(@Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(updateRoleDto)
  }
  @Delete('/:id')
  remove(@Param() deleteRoleDto: deleteRoleDto) {
    return this.roleService.remove(+deleteRoleDto.id)
  }
}
