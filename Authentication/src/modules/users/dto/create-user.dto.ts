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
import { ApiProperty } from '@nestjs/swagger';

enum UserType {
  BASIC = 'basic',
  ACADEMIC = 'academic',
}
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  userName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(10)
  password: string;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => ProfileDto)
  profile?: ProfileDto;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @Type(() => AcademicProfileDto)
  academicProfile?: AcademicProfileDto;
}
