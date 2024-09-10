
import { Favoritos } from 'src/favoritos/entities/favorito.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany,OneToMany } from 'typeorm';
import { Playlists } from 'src/playlists/entities/playlist.entity';

// El decorador @Entity indica que esta clase representa una entidad en la base de datos
@Entity()
export class Usuario {
    // Define la columna 'id' como la clave primaria generada automáticamente
    @PrimaryGeneratedColumn()
    usuarioId: number;
 
    // Define la columna 'name' con una longitud máxima de 500 caracteres
    @Column({ length: 20})
    nombre: string;

    // Define la columna 'fecha de nacimiento' como una fecha
    @Column('date')
    fechaNacimiento: Date;

    // Define la columna 'email' como una cadena de texto (varchar por defecto)
    @Column()
    email: string;

    // Define la columna 'contraseña' como una cadena de texto 
    @Column()
    contraseña: string

    //relacion con favoritos
    @ManyToMany(() => Favoritos, favorito => favorito.usuarios)
    favoritos : Favoritos[]

    @OneToMany(() => Playlists, playlist => playlist.usuarios)
    playlists: Playlists[];
    //Un usuario puede crear varias playlists (One-to-Many).
}
