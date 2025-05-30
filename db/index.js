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
        { nombreUsuario: "RacingFan", texto: "Una verdadera obra maestra.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "TurboTostadora", texto: "Esto no corre, *teletransporta*.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "AceiteEnLasVenas", texto: "El sonido de este bicho me arregla el alma.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "CaféYPista", texto: "Le das play y ya estás en la curva 3.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 2,
      imagen: "images/products/koenigsegg-agera-rs.jpg",
      nombre: "Koenigsegg Agera RS",
      descripcion: "Una bestia de velocidad, donde la ingeniería se funde con la elegancia.",
      comentarios: [
        { nombreUsuario: "SpeedLover", texto: "Pura adrenalina en cada curva.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "NitroNene", texto: "Si parpadeás, ya llegaste.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "SpoilerDeCarbono", texto: "El auto que usa el viento como almohada.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "VelocistaEmpedernido", texto: "Lo arranco y ya tengo jet lag.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 3,
      imagen: "images/products/paganizondar.jpeg",
      nombre: "Pagani Zonda R",
      descripcion: "Exclusividad y diseño que reescriben la leyenda de los hipercoches.",
      comentarios: [
        { nombreUsuario: "CarEnthusiast", texto: "Cada línea es una poesía en movimiento.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "ChasisLocura", texto: "Esto no es un coche, es una obra de arte con ruedas.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "ZondaLover420", texto: "Me dan ganas de enmarcarlo y colgarlo en el living.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "ClaxonMelódico", texto: "Le piso y suena como un dios enojado.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 4,
      imagen: "images/products/Porsche917.jpeg",
      nombre: "Porsche 917",
      descripcion: "La leyenda viva que marcó una era en la competición automovilística.",
      comentarios: [
        { nombreUsuario: "VintageRacer", texto: "Un icono que trasciende el tiempo.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "AbueloDelDrift", texto: "Me lleva directo a los '70 sin máquina del tiempo.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "RetroEnFuego", texto: "Este auto no envejece, madura como el vino.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "CurvaYTabaco", texto: "Suena a puro músculo y gloria antigua.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 5,
      imagen: "images/products/Porsche919.jpeg",
      nombre: "Porsche 919 Hybrid",
      descripcion: "El futuro del automovilismo, donde potencia e innovación se unen.",
      comentarios: [
        { nombreUsuario: "TechFan", texto: "Innovador en cada latido de su motor.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "BateríaFull", texto: "Corre más que mi internet.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "KersMan", texto: "Ese sistema híbrido me da vida.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "EcoDrifter", texto: "Respeta el planeta... pero te deja atrás igual.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 6,
      imagen: "images/products/Porsche936.jpeg",
      nombre: "Porsche 936",
      descripcion: "Precisión alemana y dominio en las pistas de resistencia.",
      comentarios: [
        { nombreUsuario: "RaceMaster", texto: "Imparable y enigmático.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "PepeTheRacer", texto: "NAVE.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "PanzerEnCurvas", texto: "Como un tanque con alas.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "EscapeCaliente", texto: "Huele a gasolina y gloria.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 7,
      imagen: "images/products/BugattiChiron.jpeg",
      nombre: "Bugatti Chiron",
      descripcion: "El epítome del lujo y la velocidad, una obra maestra en movimiento.",
      comentarios: [
        { nombreUsuario: "LuxuryDriver", texto: "Un rugido que desafía al tiempo.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "JetDeLujo", texto: "Esto no es conducir, es volar con estilo.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "CuentaBancariaLlorando", texto: "Solo lo miré y ya debo el alquiler.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "VelocidadYChampán", texto: "Corre como demonio en smoking.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 8,
      imagen: "images/products/ChevySS.jpeg",
      nombre: "Chevy SS Serie 2",
      descripcion: "Potencia americana en estado puro, con carácter y rugido imparable.",
      comentarios: [
        { nombreUsuario: "MuscleCarFan", texto: "La esencia del motor rebelde.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "BigBlockBro", texto: "Esto no gira, esto se desliza con furia.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "TrompaDeAcero", texto: "Pesa media tonelada pero acelera como diablo.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "Gasolina99", texto: "Cada tanque es un poema a la libertad (y a la nafta cara).", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 9,
      imagen: "images/products/LaFerrari.jpeg",
      nombre: "La Ferrari",
      descripcion: "Elegancia y pasión italiana, símbolo de perfección automotriz.",
      comentarios: [
        { nombreUsuario: "ItalianDream", texto: "Cada detalle habla de excelencia.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "EspressoVeloz", texto: "Corre como si tuviera café en la sangre.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "TanoDelTurbo", texto: "¡Mamma mia! Esta máquina canta ópera a 9000 rpm.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "CarbonaraFuriosa", texto: "Si Ferrari es arte, esto es la Capilla Sixtina con ruedas.", imagenDePerfil: "images/users/profile-pic.jpg" }
      ]
    },
    {
      id: 10,
      imagen: "images/products/AstonMartin .jpeg",
      nombre: "Aston Martin DB5",
      descripcion: "El coche icónico de espías, atemporal y sofisticado en cada viaje.",
      comentarios: [
        { nombreUsuario: "BondLover", texto: "El espíritu de James Bond encarnado en metal.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "007ConMate", texto: "Lo manejo y me siento con licencia para acelerar.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "EspíaEnOjotas", texto: "Elegancia, sí. Pero también garra británica.", imagenDePerfil: "images/users/profile-pic.jpg" },
        { nombreUsuario: "ShakenNoStirred", texto: "Lo estacionás y ya te piden autógrafo.", imagenDePerfil: "images/users/profile-pic.jpg" }
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
