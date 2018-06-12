CREATE DATABASE IF NOT EXISTS denutiFinal;

USE denutiFinal;

CREATE TABLE productos(
	Id 			int (255) auto_increment not null,
	nombre 		varchar(255),
	descripcion text,
	imagen		varchar(255),
	CONSTRAINT Pk_Productos PRIMARY KEY (Id)
) ENGINE=InnoDb;

CREATE TABLE recetas(
	Id 			int (255) auto_increment not null,
	mombre 		varchar(255),
	ingredientes text,
	preparacion text,
	Imagen		varchar(255),
	CONSTRAINT Pk_recetas PRIMARY KEY (Id)
) ENGINE=InnoDb;
