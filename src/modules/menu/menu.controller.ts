import { pagesDto } from './../../common/dto/common.dto'
import { Auth } from '@/common/decorator/auth.decorator'
import { Roles } from '@/types/role.enum'
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UsePipes } from '@nestjs/common'
import { CreateMenuDto } from './dto/create-menu.dto'
import { MenuIdDto, UpdateMenuDto } from './dto/update-menu.dto'
import { MenuService } from './menu.service'
import { sortValueType } from '@/common/dto/common.dto'
import { hindleMenuTree, hindlePages } from '@/utils'
import { Menu } from '@prisma/client'
@Controller('menu')
@Auth(Roles.ADMIN)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto)
  }

  @Post('/pages')
  findAll(@Body() data: pagesDto) {
    const args = hindlePages(data)
    return this.menuService.findAll(args)
  }

  @Get('/:id')
  findOne(@Param() data: MenuIdDto) {
    return this.menuService.findOne(+data.id)
  }
  @Get()
  async findTree() {
    return hindleMenuTree(await this.menuService.findTree())
  }
  @Post('/update')
  update(@Body() data: UpdateMenuDto) {
    return this.menuService.update(data)
  }

  @Delete('/:id')
  remove(@Param() data: MenuIdDto) {
    return this.menuService.remove(+data.id)
  }
}
