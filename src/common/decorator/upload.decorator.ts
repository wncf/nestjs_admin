import { FileInterceptor } from '@nestjs/platform-express'
import { applyDecorators, UseInterceptors, UseGuards, MethodNotAllowedException } from '@nestjs/common'
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface'
export function fileFilter(type: string) {
  return (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => {
    if (file.mimetype.includes(type)) {
      callback(null, true)
    } else {
      callback(new MethodNotAllowedException('文件类型错误'), false)
    }
  }
}
export function Upload(filed = 'file', options?: MulterOptions) {
  return applyDecorators(UseInterceptors(FileInterceptor(filed, options)))
}


// 图片拦截器
export function ImageUpload(filed = 'file') {
  return Upload(filed, {
    limits: { fileSize: Math.pow(1024, 2) * 2 },
    fileFilter: fileFilter('image'),
  })
}
