import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsStrongPassword,
  Min,
} from 'class-validator';

export class UserCreateDto {
  @Transform(({ value }) => value?.trim())
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @Transform(({ value }) => value?.toLowerCase()?.trim())
  @IsEmail({}, { message: 'email must be a valid email address' })
  @IsNotEmpty()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UserGetDto {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  limit?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  skip?: number;
}
