import { Menu } from '@prisma/client'
import { PrismaService } from './../prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateMenuDto } from './dto/create-menu.dto'
import { UpdateMenuDto } from './dto/update-menu.dto'

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  async create(createMenuDto: CreateMenuDto) {
    return await this.prisma.menu.create({ data: createMenuDto })
  }

  async findAll(args) {
    return await this.prisma.menu.findMany(args)
  }

  async findOne(id: number) {
    return await this.prisma.menu.findUnique({ where: { id } })
  }
  async findTree(): Promise<Menu[]> {
    return await this.prisma.menu.findMany()
  }
  async update(updateMenuDto: UpdateMenuDto) {
    const { id, ...data } = updateMenuDto
    return this.prisma.menu.update({ data, where: { id: +id } })
  }

  async remove(id: number) {
    return this.prisma.menu.delete({ where: { id } })
  }
}
