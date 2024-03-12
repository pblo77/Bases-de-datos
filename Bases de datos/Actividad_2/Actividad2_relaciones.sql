/* Creación tablas fuertes */

CREATE TABLE marcas(
    id INT PRIMARY KEY AUTO_INCREMENT,
    marca VARCHAR(45)
);

CREATE TABLE tipo_vehiculo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo_vehiculo VARCHAR(45)
);

CREATE TABLE colores(
    id INT PRIMARY KEY AUTO_INCREMENT,
    color VARCHAR(45)
);

/* Creación tabla débil */

CREATE TABLE vehiculos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    modelo VARCHAR(45),
    placa VARCHAR(45) UNIQUE,
    tipo_vehiculo_id INT,
    color_id INT,
    marca_id INT
);


/* ALTER TABLES PARA HACER LAS RELACIONES*/

ALTER TABLE vehiculos ADD FOREIGN KEY (marca_id) REFERENCES marcas(id);

ALTER TABLE vehiculos ADD FOREIGN KEY(tipo_vehiculo_id) REFERENCES tipo_vehiculo(id);

ALTER TABLE vehiculos ADD FOREIGN KEY(color_id) REFERENCES colores(id);


/* AGREGANDO DATOS PARA QUE EL USUARIO SELECCIONE */
INSERT INTO colores(color) VALUES("Mateblack"),("Carmesi");

INSERT INTO marcas(marca) VALUES("FORD"), ("Dodge");

INSERT INTO tipo_vehiculo(tipo_vehiculo) VALUES("Carro"), ("Moto");


/* AGREGANDO VEHICULOS */
INSERT INTO vehiculos(modelo,placa,tipo_vehiculo_id,color_id,marca_id) VALUES("Mustang","aaa-333",1,1,2),
("F 150","bbb-333",1,2,1),
("Raptor","ccc-333",1,1,2),
("Challenger","ddd-333",1,1,1),
("Carvina","iii-333",1,2,2),
("Lincoln","fff-333",1,1,2),
("Bronko","ggg-333",1,2,1),
("Dodge","hhh-333",1,2,2),
("Runner","jjj-333",1,1,2);

/* Trayendo datos de varias tablas */
SELECT vehiculos.modelo,tipo_vehiculo.tipo_vehiculo,colores.color,marcas.marca FROM vehiculos INNER JOIN colores INNER JOIN tipo_vehiculo INNER JOIN marcas WHERE vehiculos.color_id = colores.id AND vehiculos.tipo_vehiculo_id = tipo_vehiculo.id AND vehiculos.marca_id = marcas.id;