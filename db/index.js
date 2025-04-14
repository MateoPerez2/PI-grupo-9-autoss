const autos = {
  usuario: {
    email: "vonkoenigsegg@koenigsegg.com",
    usuario: "Christian Von Koenigsegg",
    contraseña: "contraseña123",
    fechaNacimiento: "1990-06-15", 
    nroDocumento: 12345678,
    fotoDePerfil: "images/users/Christian-Von-Koenigsegg_KOENIGSEGG-AUTOMOTIVE.jpg" 
  },
  productos: [
    {
      id: 1,
      imagen: "images/products/mazda-787b.jpeg",
      nombre: "Mazda 787B",
      descripcion: "El guerrero de Le Mans que desafió a la gravedad.",
      comentarios: [
        {
          nombreUsuario: "RacingFan",
          texto: "Una verdadera obra maestra.",
          imagenDePerfil: "images/perfil-racingfan.jpg"
        }
      ]
    },
    {
      id: 2,
      imagen: "images/products/koenigsegg-agera-rs.jpg",
      nombre: "Koenigsegg Agera RS",
      descripcion: "Una bestia de velocidad, donde la ingeniería se funde con la elegancia.",
      comentarios: [
        {
          nombreUsuario: "SpeedLover",
          texto: "Pura adrenalina en cada curva.",
          imagenDePerfil: "images/perfil-speedlover.jpg"
        }
      ]
    },
    {
      id: 3,
      imagen: "images/products/paganizondar.jpeg",
      nombre: "Pagani Zonda R",
      descripcion: "Exclusividad y diseño que reescriben la leyenda de los hipercoches.",
      comentarios: [
        {
          nombreUsuario: "CarEnthusiast",
          texto: "Cada línea es una poesía en movimiento.",
          imagenDePerfil: "images/perfil-carenthusiast.jpg"
        }
      ]
    },
    {
      id: 4,
      imagen: "images/products/Porsche917.jpeg",
      nombre: "Porsche 917",
      descripcion: "La leyenda viva que marcó una era en la competición automovilística.",
      comentarios: [
        {
          nombreUsuario: "VintageRacer",
          texto: "Un icono que trasciende el tiempo.",
          imagenDePerfil: "images/perfil-vintageracer.jpg"
        }
      ]
    },
    {
      id: 5,
      imagen: "images/products/Porsche919.jpeg",
      nombre: "Porsche 919 Hybrid",
      descripcion: "El futuro del automovilismo, donde potencia e innovación se unen.",
      comentarios: [
        {
          nombreUsuario: "TechFan",
          texto: "Innovador en cada latido de su motor.",
          imagenDePerfil: "images/perfil-techfan.jpg"
        }
      ]
    },
    {
      id: 6,
      imagen: "images/products/Porsche936.jpeg",
      nombre: "Porsche 936",
      descripcion: "Precisión alemana y dominio en las pistas de resistencia.",
      comentarios: [
        {
          nombreUsuario: "RaceMaster",
          texto: "Imparable y enigmático.",
          imagenDePerfil: "images/perfil-racemaster.jpg"
        }
      ]
    },
    {
      id: 7,
      imagen: "images/products/BugattiChiron.jpeg",
      nombre: "Bugatti Chiron",
      descripcion: "El epítome del lujo y la velocidad, una obra maestra en movimiento.",
      comentarios: [
        {
          nombreUsuario: "LuxuryDriver",
          texto: "Un rugido que desafía al tiempo.",
          imagenDePerfil: "images/perfil-luxurydriver.jpg"
        }
      ]
    },
    {
      id: 8,
      imagen: "images/products/ChevySS.jpeg",
      nombre: "Chevy SS Serie 2",
      descripcion: "Potencia americana en estado puro, con carácter y rugido imparable.",
      comentarios: [
        {
          nombreUsuario: "MuscleCarFan",
          texto: "La esencia del motor rebelde.",
          imagenDePerfil: "images/perfil-musclecarfan.jpg"
        }
      ]
    },
    {
      id: 9,
      imagen: "images/products/LaFerrari.jpeg",
      nombre: "La Ferrari",
      descripcion: "Elegancia y pasión italiana, símbolo de perfección automotriz.",
      comentarios: [
        {
          nombreUsuario: "ItalianDream",
          texto: "Cada detalle habla de excelencia.",
          imagenDePerfil: "images/perfil-italiandream.jpg"
        }
      ]
    },
    {
      id: 10,
      imagen: "images/products/AstonMartin .jpeg",
      nombre: "Aston Martin DB5",
      descripcion: "El coche icónico de espías, atemporal y sofisticado en cada viaje.",
      comentarios: [
        {
          nombreUsuario: "BondLover",
          texto: "El espíritu de James Bond encarnado en metal.",
          imagenDePerfil: "images/perfil-bondlover.jpg"
        }
      ]
    }
  ],
  filtrarPorId: function( idBuscado ) {
    let listaNueva = [];
    for (let i = 0; i < this.productos.length; i++) {
      const autoIterado = this.productos[i]
      if (autoIterado.id == idBuscado) {
        listaNueva.push(autoIterado)
      }
      
    }
    return listaNueva
    
  }
};

module.exports = autos;
