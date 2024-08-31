import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CancionesService } from './cancion.service';
import { CreateCancionesDto } from './dto/create-canciones.dto';
import { UpdateCancionesDto } from './dto/update-canciones.dto';

@Controller('canciones')
export class CancionesController {
  constructor(private readonly cancionesService: CancionesService) {}

  @Post()
  create(@Body() createCancioneDto: CreateCancionesDto) {
    return this.cancionesService.createOneSong(createCancioneDto);
  }

  @Get()
  findAll() {
    return this.cancionesService.findAllSongs();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cancionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCancioneDto: UpdateCancionesDto) {
    return this.cancionesService.update(+id, updateCancioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cancionesService.remove(+id);
  }
}