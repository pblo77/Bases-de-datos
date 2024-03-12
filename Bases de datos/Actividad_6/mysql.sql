/* tabla productos */
CREATE TABLE productos (
    ID_producto INT PRIMARY KEY,
    Nombre VARCHAR(255),
    Precio DECIMAL(10, 2),
    Categoria VARCHAR(50)
);
/* tabla clientes */

CREATE TABLE clientes (
    ID_cliente INT PRIMARY KEY,
    Nombre VARCHAR(100),
    Telefono VARCHAR(20),
    Direccion VARCHAR(255)
);
/* tabla pedidos */

CREATE TABLE pedidos (
    ID_pedido INT PRIMARY KEY,
    Fecha DATE,
    ID_cliente INT,
    FOREIGN KEY (ID_cliente) REFERENCES clientes(ID_cliente)
);

/* tabla de enlace productos_pedidos; */

CREATE TABLE productos_Pedidos (
    ID_producto INT,
    ID_pedido INT,
    cantidad INT,
    precio DECIMAL(10, 2),
    PRIMARY KEY (ID_producto, ID_pedido),
    FOREIGN KEY (ID_producto) REFERENCES productos(ID_producto),
    FOREIGN KEY (ID_pedido) REFERENCES pedidos(ID_pedido)
);

/* tabla productos insertando datos */
INSERT INTO productos (ID_producto, Nombre, Precio, Categoria)
VALUES
    (1, 'Detergente', 1000.99, 'Aseo'),
    (2, 'Leche', 200.49, 'Lácteos'),
    (3, 'Atún enlatado', 100.79, 'Enlatados'),
    (10, 'Papel higiénico', 100.99, 'Aseo');


/* tabla clientes insertando datos */
/* DROP TABLE productos;
DROP TABLE `productos_Pedidos`; */

INSERT INTO clientes (ID_cliente, Nombre, Telefono, Direccion)
VALUES
    (101, 'Juan Pérez', '123-456-7890', 'Calle Principal 123'),
    (102, 'María Rodríguez', '987-654-3210', 'Avenida Central 456'),
    (110, 'Pedro Gómez', '555-123-4567', 'Plaza Mayor 789');


/* insertando datos en la tabla productos_pedidos */

INSERT INTO productos_Pedidos (ID_producto, ID_pedido, cantidad, precio)
VALUES
    (1, 1001, 2, 5.99),
    (2, 1001, 1, 2.49),
    (3, 1002, 3, 1.79);


/* insertando datos en la tabla pedidos */
INSERT INTO pedidos (ID_pedido, Fecha, ID_cliente)
VALUES
    (1001, '2024-03-05', 101),
    (1002, '2024-03-06', 102),
    (1010, '2024-03-10', 110);


SELECT * FROM productos_Pedidos;
SELECT * FROM productos;
SELECT * FROM pedidos;
SELECT * FROM clientes;

SELECT * FROM productos WHERE Precio > 120.0;

SELECT* FROM clientes INNER JOIN productos_Pedidos INNER JOIN pedidos INNER JOIN productos WHERE clientes.ID_cliente =102 AND productos.`Precio`>120.0 AND pedidos.`Fecha`= '2024-03-10' AND productos_Pedidos.cantidad>2;