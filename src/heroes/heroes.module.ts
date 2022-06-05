import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { HeroesRepository } from './heroes.repository';
import { HeroSchema, Hero } from 'src/_schemas/hero.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
  ],
  controllers: [HeroesController],
  providers: [HeroesService, HeroesRepository],
})
export class HeroesModule {}
