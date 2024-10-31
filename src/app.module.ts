import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CancionesModule } from './canciones/cancion.module';
import { ArtistasModule } from './artistas/artistas.module';
import { GenerosModule } from './generos/generos.module';
import { FavoritosModule } from './favoritos/favoritos.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { MercadoPagoController } from './mercadopago/mercadopago.controller';
import { MercadopagoService } from './mercadopago/mercadopago.service';
import { Top10Module } from './top10/top10.module';
import { TendenciasModule } from './tendencias/tendencias.module';

@Module({
  imports: [UsuariosModule, CancionesModule, ArtistasModule, GenerosModule, FavoritosModule, PlaylistsModule, AutenticacionModule, Top10Module, TendenciasModule],
  controllers: [AppController, MercadoPagoController],
    
  providers: [AppService, MercadopagoService],
    

})
export class AppModule {}
