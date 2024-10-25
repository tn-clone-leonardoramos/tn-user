import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common'

import { AppService } from '@app/app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/healthcheck')
  healthCheck() {
    return
  }

  @Get('/users')
  getUsers(): Record<string, unknown>[] {
    return this.appService.getUsers()
  }

  @Post('/users')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() user: Record<string, unknown>) {
    this.appService.createUser(user)
  }
}
