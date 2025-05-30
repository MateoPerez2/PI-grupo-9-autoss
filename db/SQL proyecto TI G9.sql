CREATE SCHEMA AutoBidder;
USE AutoBidder;

CREATE TABLE Usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(30) UNIQUE,
  usuario VARCHAR(30) UNIQUE,
  contrasenia VARCHAR(60),
  fecha DATETIME,
  dni INT,
  foto_perfil VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Idusuario INT,
  foto VARCHAR(100),
  nombre VARCHAR(80),
  descripcion VARCHAR(150),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_usuario FOREIGN KEY (Idusuario) REFERENCES Usuarios(id)
);

CREATE TABLE Comentarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Idproducto INT,
  Idusuario INT,
  texto VARCHAR(200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_comentario_producto FOREIGN KEY (Idproducto) REFERENCES Productos(id),
  CONSTRAINT fk_comentario_usuario FOREIGN KEY (Idusuario) REFERENCES Usuarios(id)
);

INSERT INTO Usuarios (usuario,email, contrasenia, fecha, dni, foto_perfil) VALUES
('Christian Von Koenigsegg','vonkoenigsegg@koenigsegg.com', 'contraseña123', '1990-06-15', 12345678, 'images/users/Christian-Von-Koenigsegg_KOENIGSEGG-AUTOMOTIVE.jpg'),
('Jordi Wild ','jordiwild@gmail.com', 'wildproyect', '1990-5-12', 37390189, '/images/users/user2.png'),
('Auronplay','raulgenes@hotmail.com', 'yoquemealegro', '1978-03-10', 34555123, '/images/users/user3.png'),
('Rubius','rubendouglas@gmail.com', 'rubius24', '2000-06-28', 44359483, '/images/users/user4.png'),
('vegeta777','samuelbatuecas@gmail.com', 'muybuenasatodos', '1990-2-21', 32757164, '/images/users/user5.png');

INSERT INTO Productos (Idusuario, foto, nombre, descripcion) VALUES
(1, '/images/products/mazda-787b.jpeg', 'Mazda 787B', 'El guerrero de Le Mans que desafió a la gravedad.'),
(2, '/images/products/koenigsegg-agera-rs.jpg', 'Koenigsegg Agera RS', 'Una bestia de velocidad, donde la ingeniería se funde con la elegancia.'),
(3, '/images/products/paganizondar.jpeg', 'Pagani Zonda R', 'Exclusividad y diseño que reescriben la leyenda de los hipercoches.'),
(3, '/images/products/Porsche917.jpeg', 'Porsche 917', 'La leyenda viva que marcó una era en la competición automovilística.'),
(4, '/images/products/Porsche919.jpeg', 'Porsche 919 Hybrid', 'El futuro del automovilismo, donde potencia e innovación se unen.'),
(5, '/images/products/Porsche936.jpeg', 'Porsche 936', 'Precisión alemana y dominio en las pistas de resistencia.'),
(1, '/images/products/BugattiChiron.jpeg', 'Bugatti Chiron', 'El epítome del lujo y la velocidad, una obra maestra en movimiento.'),
(5, '/images/products/ChevySS.jpeg', 'Chevy SS Serie 2', 'Potencia americana en estado puro, con carácter y rugido imparable.'),
(2, 'images/products/LaFerrari.jpeg', 'La Ferrari', 'Elegancia y pasión italiana, símbolo de perfección automotriz.'),
(1, '/images/products/AstonMartin .jpeg', 'Aston Martin DB5', 'El coche icónico de espías, atemporal y sofisticado en cada viaje.');

INSERT INTO Comentarios (Idproducto, Idusuario, texto) VALUES
(1, 3, 'Una verdadera obra maestra.'),
(2, 1, 'Pura adrenalina en cada curva.'),
(3, 5, 'Cada línea es una poesía en movimiento.'),
(4, 4, 'Un icono que trasciende el tiempo.'),
(5, 1, 'Innovador en cada latido de su motor.'),
(6, 2, 'Imparable y enigmático.'),
(7, 5, 'Un rugido que desafía al tiempo.'),
(8, 2, 'La esencia del motor rebelde.'),
(9, 3, 'Cada detalle habla de excelencia.'),
(10, 4, 'El espíritu de James Bond encarnado en metal.');