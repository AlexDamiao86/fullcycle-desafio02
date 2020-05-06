import { Controller, Get, Post, Delete, Put, Param, Body } from '@nestjs/common';
import { Maratona } from '../maratona.entity';
import { MaratonaService } from './maratona.service';


@Controller('maratona')
export class MaratonaController {
  constructor(private maratonaService: MaratonaService) {}

  @Get()
  index(): Promise<Maratona[]> {
    return this.maratonaService.findAll();
  }

  @Post()
  async create(@Body() maratonaData: Maratona): Promise<any> {
    return this.maratonaService.create(maratonaData);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<any> {
    return this.maratonaService.delete(id);
  }  

  @Put(':id')
  async update(@Param('id') id, @Body() maratonaData: Maratona): Promise<any> {
      maratonaData.id = id;
      console.log('Update #' + maratonaData.id)
      return this.maratonaService.update(maratonaData);
  }  
}
