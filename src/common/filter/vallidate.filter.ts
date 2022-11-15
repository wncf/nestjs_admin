import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException } from '@nestjs/common'
import { HttpStatus } from '@nestjs/common/enums'
import { Response } from 'express'

@Catch(HttpException)
export class ValidateExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()
    //自定义异常处理
    if (exception instanceof BadRequestException) {
      const responseObject = exception.getResponse() as any
      return response.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        statusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        message: responseObject.message.map((error) => {
          const info = error.split('-')
          if (info.length > 1) {
            return {
              file: info[0],
              message: info[1],
            }
          } else {
            return {
              message: info[0],
            }
          }
        }),
        path: request.url,
      })
    } else {
      return response.status(exception.getStatus()).json(exception.getResponse())
    }
  }
}
