db.categorias.insertMany([
    { _id: 1, nombre: 'Aseo' },
    { _id: 2, nombre: 'Enlatado' },
    { _id: 3, nombre: 'Lácteos' },
    { _id: 4, nombre: 'Desayuno' }
  ]);
  
  // Colección de Productos
  db.productos.insertMany([
    { _id: 1, nombre: 'Jabón de manos', precio: 2.99, stock: 50, categoriaId: 1 },
    { _id: 2, nombre: 'Arroz', precio: 1.99, stock: 100, categoriaId: 2 },
    { _id: 3, nombre: 'Leche', precio: 3.49, stock: 30, categoriaId: 3 },
    { _id: 4, nombre: 'Cereal', precio: 4.99, stock: 40, categoriaId: 4 }
  ]);
  
  // Colección de Clientes
  db.clientes.insertMany([
    { _id: 1, nombre: 'Cliente 1', telefono: '1234567890', direccion: 'Calle 123, Ciudad' },
    { _id: 2, nombre: 'Cliente 2', telefono: '9876543210', direccion: 'Avenida XYZ, Pueblo' }
  ]);
  
  // Colección de Pedidos
  db.pedidos.insertMany([
    { _id: 1, clienteId: 1, fecha: ISODate("2024-03-05T12:00:00Z"), estado: 'Pendiente' },
    { _id: 2, clienteId: 2, fecha: ISODate("2024-03-05T12:00:00Z"), estado: 'Entregado' }
  ]);
  
  // Colección de DetallesPedido
  db.detallesPedido.insertMany([
    { _id: 1, pedidoId: 1, productoId: 1, cantidad: 3 },
    { _id: 2, pedidoId: 1, productoId: 2, cantidad: 2 },
    { _id: 3, pedidoId: 2, productoId: 3, cantidad: 1 },
    { _id: 4, pedidoId: 2, productoId: 4, cantidad: 4 }
  ]);