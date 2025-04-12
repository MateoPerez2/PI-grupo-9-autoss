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
      imagen: "images/mazda787b.jpg",
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
      imagen: "images/koenigseggagera.jpg",
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
      imagen: "images/paganizondar.jpg",
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
      imagen: "images/porsche917.jpg",
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
      imagen: "images/porsche919hybrid.jpg",
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
      imagen: "images/porsche936.jpg",
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
      imagen: "images/bugattichiron.jpg",
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
      imagen: "images/chevyssserie2.jpg",
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
      imagen: "images/laferrari.jpg",
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
      imagen: "images/astonmartindb5.jpg",
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
  filtrarUsuario: function () {
    return {
      email: this.usuario.email,
      usuario: this.usuario.usuario,
      fotoDePerfil: this.usuario.fotoDePerfil
    };
  },
  filtrarComentarios: function () {
    let comentariosNombre = [];
    let comentariosTexto = [];
    let comentariosImg = [];

    for (let i = 0; i < autos.productos.length; i++) {
      let producto = autos.productos[i];
      for (let j = 0; j < producto.comentarios.length; j++) {
        let comentario = producto.comentarios[j];
        comentariosNombre.push(comentario.nombreUsuario);
        comentariosTexto.push(comentario.texto);
        comentariosImg.push(comentario.imagenDePerfil);
      }
    }
    return {
      comentariosNombre, comentariosImg, comentariosTexto
    }
  },
  filtrarDescipcion: function() {
    let desc = []
    
    for (let i = 0; i < autos.productos.length; i++) {
      desc.push(autos.productos[i].descripcion)
    }
    return {
      desc
    }
  }
};

module.exports = autos;
