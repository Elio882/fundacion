import { IsDateString, IsOptional, IsString } from 'class-validator';

export class ProfileDto {
  @IsString()
  @IsOptional()
  readonly profilePicture?: string;

  @IsString()
  name: string;

  @IsString()
  telephone: string;

  @IsString()
  ci: string;

  @IsString()
  lastName: string;

  @IsString()
  maternalLastName: string;

  @IsDateString()
  dateOfBirth: string;
}
