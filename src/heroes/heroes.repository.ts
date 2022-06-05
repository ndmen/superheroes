import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HeroDo } from 'src/_schemas/hero.do';

export class HeroesRepository {
  constructor(
    @InjectModel('Hero')
    private heroModel: Model<HeroDo>,
  ) {}

  async createOne(createHeroDto): Promise<any> {
    const createHero = await this.heroModel.create(createHeroDto);
    return createHero;
  }

  async findAll(): Promise<any> {
    const findAllHeroes = await this.heroModel.find();
    return findAllHeroes;
  }

  async findOne(id): Promise<any> {
    const findHeroById = await this.heroModel.findById(id);
    return findHeroById;
  }

  async updateOne(id, updateHeroDto): Promise<any> {
    const updateHeroById = await this.heroModel.findByIdAndUpdate(
      id,
      updateHeroDto,
    );
    return updateHeroById;
  }

  async deleteOne(id): Promise<any> {
    const deleteHeroById = await this.heroModel.findByIdAndDelete(id);
    return deleteHeroById;
  }
}
