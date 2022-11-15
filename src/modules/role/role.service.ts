import { PrismaService } from './../prisma/prisma.service'
import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { UpdateRoleDto } from './dto/update-role.dto'

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}
  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.role.create({
      data: createRoleDto,
    })
  }

  async findAll() {
    return await this.prisma.role.findMany()
  }
  
  async update(updateRoleDto: UpdateRoleDto) {
    const { id, ...data } = updateRoleDto
    return await this.prisma.role.update({ where: { id: +id }, data })
  }

  async remove(id: number) {
    return this.prisma.role.delete({ where: { id } })
  }
}
