import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CancionesModule } from './canciones/cancion.module';
import { ArtistasModule } from './artistas/artistas.module';
import { GenerosModule } from './generos/generos.module';
import { FavoritosModule } from './favoritos/favoritos.module';

@Module({
  imports: [UsuariosModule, CancionesModule, ArtistasModule, GenerosModule, FavoritosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
