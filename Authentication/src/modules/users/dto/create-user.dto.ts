import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ProfileDto } from './profile.dto';
import { Type } from 'class-transformer';
import { AcademicProfileDto } from './academic-profile.dto';

enum UserType {
  BASIC = 'basic',
  ACADEMIC = 'academic',
}
export class CreateUserDto {
  @IsString()
  userName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile?: ProfileDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => AcademicProfileDto)
  academicProfile?: AcademicProfileDto;
}
