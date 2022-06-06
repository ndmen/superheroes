import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesService } from './heroes.service';
import { HeroesController } from './heroes.controller';
import { HeroesRepository } from './heroes.repository';
import { HeroSchema, Hero } from 'src/_schemas/hero.schema';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hero.name, schema: HeroSchema }]),
    FilesModule,
  ],
  controllers: [HeroesController],
  providers: [HeroesService, HeroesRepository],
})
export class HeroesModule {}
