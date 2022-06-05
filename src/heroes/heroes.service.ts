import { Injectable } from '@nestjs/common';
import { HeroesRepository } from './heroes.repository';
import { CreateHeroDto } from './dto/create-hero.dto';
import { UpdateHeroDto } from './dto/update-hero.dto';
@Injectable()
export class HeroesService {
  constructor(private readonly heroesRepository: HeroesRepository) {}

  async create(createHeroDto: CreateHeroDto) {
    const createHero = await this.heroesRepository.createOne(createHeroDto);
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

  async update(id: string, updateHeroDto: UpdateHeroDto) {
    const updateHeroById = await this.heroesRepository.updateOne(
      id,
      updateHeroDto,
    );
    return updateHeroById;
  }

  async remove(id: string) {
    const getHeroById = await this.heroesRepository.deleteOne(id);
    return getHeroById;
  }
}
