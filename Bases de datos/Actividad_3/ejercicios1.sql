/* 1 .Listado de todos los usuarios con solo nombres, apellidos y edad que tengan 20 años de edad. */
SELECT nombres,apellidos,edad FROM users WHERE edad = 20;

/* 2. Listado de todas las mujeres que tengan entre 20 y 30 años de edad */
SELECT * FROM users WHERE genero="M" AND edad >=20 AND edad <=30;

/* 3. Persona con menos edad en base de datos */
SELECT * FROM users WHERE edad= (SELECT MIN(edad) FROM users) LIMIT 1;

/*4.  Usuarios registrados en la base de datos */
SELECT COUNT(*) FROM users;

/*5.  Traer los 5 primeros usuarios en base de datos */
SELECT * FROM users LIMIT 5;

/* 6. Traer los 10 ultimos usuarios en base de datos */
SELECT * FROM users ORDER BY id DESC LIMIT 10;

/* 7. Listar usuarios que su correo finalice en .NET */
SELECT RIGHT(correo,4) FROM users WHERE RIGHT(correo,4)=".net";

/* 8. Usuarios que no vivan en Colombia */
SELECT * FROM users WHERE pais!="colombia";

/* 9. Usuarios que no vivan en ecuador y panamá */
SELECT * FROM users WHERE pais!="ecuador" AND pais!="panama";

/* EJERCICIO 10. Cuantos usuarios son de colombia y les gusta el rock */
SELECT COUNT(*) FROM users WHERE pais="colombia" AND musica="rock";

/* 11. Actualizar el genero musical de todos los usuario de la base de datos */
UPDATE users SET musica="carranga" WHERE  musica="metal";

/* 12. Listado de hombres que les guste la carranga, sean de colombia y tengan entre 10 y 20 años de edad. */
SELECT * FROM users WHERE genero="H" AND musica="carranga" AND pais="colombia" AND edad>=10 AND edad<=20;

/* 13. Actualizar todos los usuarios que tengan 99 años, su nuevo genero musical favorito sera la carranga */
UPDATE users SET musica="carranga" WHERE edad=99;

/* 14. Listar todos los usuarios que su letra inicie con "a", "A" */
SELECT * FROM users WHERE LEFT(nombres,1)="a";

/* 15. Listar todos los usuarios que su apellido finalice en "z", "Z" */
SELECT * FROM users WHERE RIGHT(apellidos,1)="z"

/* 16. Actualizar los usuarios que tengan 50 años; su nuevo genero musical será NULL */

ALTER TABLE users 
CHANGE musica musica VARCHAR(255) CHARACTER 
SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL;

UPDATE users SET musica = NULL WHERE edad=50;

/* 17. usuarios que su genero sea null */
SELECT * FROM users  WHERE edad=50;

/* 18. Resultado de la suma de todas las edades de la base de datos */
SELECT SUM(edad) as total_edad FROM users;

/* 19. cuantos usuarios hay registrados de ecuador */
SELECT COUNT(*) FROM users WHERE pais="ecuador";

/* 20. cuantos usuarios son de colombia y les gusta el vallenato */
SELECT COUNT(*) FROM users WHERE pais="colombia" AND musica="vallenato"