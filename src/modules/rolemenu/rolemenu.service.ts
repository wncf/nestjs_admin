import { paramsOrder } from '@/utils'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AdmMenuDto, CreateRolemenuDto } from './dto/create-rolemenu.dto'
import { UpdateRolemenuDto } from './dto/update-rolemenu.dto'

@Injectable()
export class RolemenuService {
  constructor(private prisma: PrismaService) {}
  async create(createRolemenuDto: CreateRolemenuDto) {
    return await this.prisma.roleMenu.create({ data: createRolemenuDto })
  }
  async admMenu(AdmMenu: AdmMenuDto) {
    const rids = await this.prisma.roleMenu.findMany({ where: { rid: +AdmMenu.rid } })
    const mids = rids.map((r) => r.mid)
    const data = paramsOrder(AdmMenu.menus, mids)
    data.adds.forEach(async (i) => {
      await this.prisma.roleMenu.create({
        data: {
          rid: +AdmMenu.rid,
          mid: i,
        },
      })
    })
    if (data.dels.length) {
      await this.prisma.roleMenu.deleteMany({
        where: {
          mid: {
            in: data.dels,
          },
        },
      })
    }
  }
  async findAll() {
    return `This action returns all rolemenu`
  }

  async findOne(id: number) {
    return this.prisma.roleMenu.findMany({ where: { rid: id } })
  }

  async update(id: number, updateRolemenuDto: UpdateRolemenuDto) {
    return `This action updates a #${id} rolemenu`
  }

  async remove(id: number) {
    return `This action removes a #${id} rolemenu`
  }
}
