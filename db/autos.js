const autos = {
    usuario: {
      email: "usuario@example.com",
      usuario: "usuarioEjemplo",
      contraseña: "contraseña123",
      fechaNacimiento: "1990-06-15", 
      nroDocumento: 12345678,
      fotoDePerfil: "images/perfil-user.jpg" 
    },
    productos: [
      {
        id: 1,
        imagen: "images/producto1.jpg", 
        nombre: "Laptop Ultra",
        descripcion: "Laptop de alto rendimiento para juegos y trabajo.",
        comentarios: [
          {
            nombreUsuario: "Juan Perez",
            texto: "Excelente producto, lo recomiendo.",
            imagenDePerfil: "images/perfil-juan.jpg"
          },
          {
            nombreUsuario: "Ana Martínez",
            texto: "La calidad es insuperable.",
            imagenDePerfil: "images/perfil-ana.jpg"
          }
        ]
      },
      {
        id: 2,
        imagen: "images/producto2.jpg",
        nombre: "Smartphone X",
        descripcion: "Teléfono inteligente con cámara avanzada.",
        comentarios: [
          {
            nombreUsuario: "Carlos López",
            texto: "Rendimiento y diseño modernos.",
            imagenDePerfil: "images/perfil-carlos.jpg"
          }
        ]
      },
      {
        id: 3,
        imagen: "images/producto3.jpg",
        nombre: "Auriculares Stereo",
        descripcion: "Auriculares con cancelación de ruido para una experiencia inmersiva.",
        comentarios: [
          {
            nombreUsuario: "María Gómez",
            texto: "Son perfectos para largas sesiones de música.",
            imagenDePerfil: "images/perfil-maria.jpg"
          }
        ]
      },
      {
        id: 4,
        imagen: "images/producto4.jpg",
        nombre: "Monitor HD",
        descripcion: "Monitor de alta definición de 24 pulgadas ideal para gaming y oficina.",
        comentarios: [
          {
            nombreUsuario: "Luis Ramírez",
            texto: "La imagen es nítida y muy fluida.",
            imagenDePerfil: "images/perfil-luis.jpg"
          }
        ]
      },
      {
        id: 5,
        imagen: "images/producto5.jpg",
        nombre: "Teclado Mecánico",
        descripcion: "Teclado con retroiluminación personalizable y alto tacto.",
        comentarios: [
          {
            nombreUsuario: "Sofía Torres",
            texto: "Excelente para programar y escribir rápido.",
            imagenDePerfil: "images/perfil-sofia.jpg"
          }
        ]
      },
      {
        id: 6,
        imagen: "images/producto6.jpg",
        nombre: "Mouse Gaming",
        descripcion: "Mouse ergonómico con alta precisión y botones personalizables.",
        comentarios: [
          {
            nombreUsuario: "Miguel Herrera",
            texto: "Muy cómodo y preciso en juegos intensos.",
            imagenDePerfil: "images/perfil-miguel.jpg"
          }
        ]
      },
      {
        id: 7,
        imagen: "images/producto7.jpg",
        nombre: "Impresora Multifuncional",
        descripcion: "Impresora que permite imprimir, escanear y copiar documentos.",
        comentarios: [
          {
            nombreUsuario: "Laura Sánchez",
            texto: "Ideal para mi oficina en casa.",
            imagenDePerfil: "images/perfil-laura.jpg"
          }
        ]
      },
      {
        id: 8,
        imagen: "images/producto8.jpg",
        nombre: "Tablet Pro",
        descripcion: "Tablet de alto rendimiento ideal para profesionales en movilidad.",
        comentarios: [
          {
            nombreUsuario: "Diego Fernández",
            texto: "Ligera, potente y perfecta para diseñar en movimiento.",
            imagenDePerfil: "images/perfil-diego.jpg"
          }
        ]
      },
      {
        id: 9,
        imagen: "images/producto9.jpg",
        nombre: "Smartwatch Series 5",
        descripcion: "Reloj inteligente con múltiples funciones de salud y conectividad.",
        comentarios: [
          {
            nombreUsuario: "Natalia Ruiz",
            texto: "Excelente integración con todas mis apps.",
            imagenDePerfil: "images/perfil-natalia.jpg"
          }
        ]
      },
      {
        id: 10,
        imagen: "images/producto10.jpg",
        nombre: "Cámara Digital",
        descripcion: "Cámara compacta de alta resolución para capturar momentos especiales.",
        comentarios: [
          {
            nombreUsuario: "Andrés Vidal",
            texto: "Perfecta para fotografía familiar y de eventos.",
            imagenDePerfil: "images/perfil-andres.jpg"
          }
        ]
      }
    ]
  };

  module.exports=autos