import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { Playlists } from 'src/playlists/entities/playlist.entity';
import { Canciones } from 'src/canciones/entities/cancion.entity';

// El decorador @Entity indica que esta clase representa una entidad en la base de datos
@Entity()
export class Usuario {
    // Define la columna 'id' como la clave primaria generada automáticamente
    @PrimaryGeneratedColumn()
    usuarioId: number;
    
    // Define la columna 'name' con una longitud máxima de 500 caracteres
    @Column('varchar', { length: 255 })
    nombre: string;

    // Define la columna 'username' como un nombre unico
    @Column('varchar', { length: 64, unique: true })
    userName: string;

    // es necesaria la fecha?
    @Column('date')
    fechaNacimiento: Date;

    // Define la columna 'email' como una cadena de texto de tipo unico
    @Column('varchar', { length: 255, unique: true })
    email: string;

    // Define la columna 'contraseña' como una cadena de texto 
    @Column('varchar', { length: 60 })
    contraseña: string

    @OneToMany(() => Playlists, playlist => playlist.usuario)
    playlists: Playlists[];
    //Un usuario puede crear varias playlists (One-to-Many).

    @ManyToMany(() => Canciones, cancion => cancion.usuario)
    canciones: Canciones[];
}
