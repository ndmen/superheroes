import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('heroes')
@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @UseInterceptors(FileInterceptor('images'))
  @ApiConsumes('multipart/form-data')
  @Post()
  uploadFile(@Body() body: CreateHeroDto, @UploadedFile() images) {
    return this.heroesService.createFile(body, images);
  }

  @Get()
  findAll() {
    return this.heroesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.heroesService.findOne(id);
  }

  @UseInterceptors(FileInterceptor('images'))
  @ApiConsumes('multipart/form-data')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHeroDto: UpdateHeroDto,
    @UploadedFile() images,
  ) {
    return this.heroesService.update(id, updateHeroDto, images);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroesService.remove(id);
  }
}
