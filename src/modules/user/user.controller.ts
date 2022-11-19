import { Controller, Get } from '@nestjs/common'

@Controller()
export class UserController {
  @Get('')
  getFileInfo() {
    return 'hellow word'
  }
}
