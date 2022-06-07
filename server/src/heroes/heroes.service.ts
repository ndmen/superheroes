import { Injectable } from '@nestjs/common';
import { HeroesRepository } from './heroes.repository';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
import { FilesService } from 'src/files/files.service';
@Injectable()
export class HeroesService {
  constructor(
    private readonly heroesRepository: HeroesRepository,
    private readonly filesService: FilesService,
  ) {}

  async createFile(body: CreateHeroDto, images: any) {
    const fileName = await this.filesService.create(images);
    const createHero = await this.heroesRepository.createOne(body);
    const updateImagesHero = await this.heroesRepository.updateOneFile(
      createHero._id,
      fileName,
    );
    return createHero;
  }

  async findAll() {
    const getAllHeroes = await this.heroesRepository.findAll();
    return getAllHeroes;
  }

  async findOne(id: string) {
    const getHeroById = await this.heroesRepository.findOne(id);
    return getHeroById;
  }

  async update(id: string, updateHeroDto: UpdateHeroDto, images: any) {
    const fileName = await this.filesService.create(images);
    const updateHero = await this.heroesRepository.updateOne(id, updateHeroDto);
    const updateImagesHero = await this.heroesRepository.updateOneFile(
      id,
      fileName,
    );
    return updateHero;
  }

  async remove(id: string) {
    const getHeroById = await this.heroesRepository.deleteOne(id);
    return getHeroById;
  }
}
