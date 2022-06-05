import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHeroDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nickname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  real_name: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  origin_description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  superpowers: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  catch_phrase: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  images: string;
}
