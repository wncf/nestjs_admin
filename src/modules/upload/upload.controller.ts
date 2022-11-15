import { ImageUpload } from '@/common/decorator/upload.decorator'
import { Controller, Post, UploadedFile } from '@nestjs/common'
@Controller('upload')
export class UploadController {
  @Post('image')
  @ImageUpload()
  uploadImage(@UploadedFile() file: Express.Multer.File): Express.Multer.File {
    return file
  }
}
