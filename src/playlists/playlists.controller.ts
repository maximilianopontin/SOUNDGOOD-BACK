import { Controller, Get, Post, Body, Patch, Param,Query, NotFoundException, Delete, ParseIntPipe, HttpStatus } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { Playlists } from './entities/playlist.entity';

@Controller('playlists')
export class PlaylistsController {
  constructor(private readonly playlistsService: PlaylistsService) {}

  @Post()
  create(@Body() createPlaylistDto: CreatePlaylistDto) {
    return this.playlistsService.createOnePlaylist(createPlaylistDto);
  }

  @Get()
  findAll() {
    return this.playlistsService.findAllPlaylists();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.playlistsService.findOnePlaylist(+id);
  }

  @Get('search/by-title')
  async searchPlaylists(@Query('title') title: string): Promise<Playlists[]> {

    return this.playlistsService.findPlaylistByTitle(title);
  }

  @Patch(':id')
  update(@Param('id', new ParseIntPipe({
    errorHttpStatusCode:
    HttpStatus.NOT_ACCEPTABLE
})) id: number, 
@Body() updatePlaylistDto: UpdatePlaylistDto) {
    return this.playlistsService.updateOnePlaylist(id, updatePlaylistDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe({
    errorHttpStatusCode:
    HttpStatus.NOT_ACCEPTABLE
  })) id: number) {
    return this.playlistsService.deleteOnePlaylist(id);
  }
}
