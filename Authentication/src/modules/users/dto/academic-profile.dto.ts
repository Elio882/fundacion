import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { ProfileDto } from './profile.dto';

export class AcademicProfileDto extends ProfileDto {
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  semester?: number[];
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  readonly career?: string[];
}
