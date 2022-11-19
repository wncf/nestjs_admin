import { Module } from '@nestjs/common';
import { RolemenuService } from './rolemenu.service';
import { RolemenuController } from './rolemenu.controller';

@Module({
  controllers: [RolemenuController],
  providers: [RolemenuService]
})
export class RolemenuModule {}
