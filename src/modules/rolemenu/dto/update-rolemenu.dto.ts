import { PartialType } from '@nestjs/mapped-types';
import { CreateRolemenuDto } from './create-rolemenu.dto';

export class UpdateRolemenuDto extends PartialType(CreateRolemenuDto) {}
