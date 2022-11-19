import { RoleMenuIdDto } from './dto/info-rolemenu.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolemenuService } from './rolemenu.service';
import { CreateRolemenuDto, AdmMenuDto } from './dto/create-rolemenu.dto';
import { UpdateRolemenuDto } from './dto/update-rolemenu.dto';
import { Auth } from '@/common/decorator/auth.decorator';
import { Roles } from '@/types/role.enum';

@Auth(Roles.ADMIN)
@Controller('rolemenu')
export class RolemenuController {
  constructor(private readonly rolemenuService: RolemenuService) {}

  @Post('/admMenu')
  create(@Body() admMenu: AdmMenuDto) {
    return this.rolemenuService.admMenu(admMenu);
  }

  @Get()
  findAll() {
    return this.rolemenuService.findAll();
  }

  @Get(':id')
  findOne(@Param() data: RoleMenuIdDto) {
    return this.rolemenuService.findOne(+data.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRolemenuDto: UpdateRolemenuDto) {
    return this.rolemenuService.update(+id, updateRolemenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolemenuService.remove(+id);
  }
}
