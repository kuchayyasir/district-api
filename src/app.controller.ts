import { Controller, Get } from '@nestjs/common';
import { AppService, IDistrict } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  testAPI(): string {
    return 'API Works';
  }
  @Get('/districts')
  getDistricts(): Array<IDistrict> {
    return this.appService.getDistricts();
  }
}
