module.exports = {

  async up (queryInterface, Sequelize) {
 
     Example:
      await queryInterface.bulkInsert('Funkos', [
        {
          name:"LUCAS PARMA",
          description: "Team Front. Vendedor de nuevas tecnologías y psicólogo. Fanático de la música y de quemar tostadas. Aviso: no usa turbante, es solo su cabellera indomable",
          collection: "Team 4",
          serialNumber: "420",
          price: 3.2000,
          stock: 1,
          rating: "",
          image: "https://i.imgur.com/0Q1QXkS.png",
        },
        {
          name: "STANY BERBEROVA",
          description:
            "Políglota Búlgara Girl, de corazón Argentino. Ser pensante y cauteloso. Interesada por la inteligencia Artificial.",
          collection: "Team 4",
          serialNumber: "421",
          price: 3.500,
          stock: 2,
          rating: "",
          image: "https://i.imgur.com/ta7xXAt.png",
        },
        {
          name: "BAUTI PETRICH ",
          description:
            "Amante del mate como todo Entrerriano. Futuro Aussie boy. Cautivado por el back y por el estilo de vida digital.",
          collection: "Team 4",
          serialNumber: "422",
          price: 3.300,
          stock: 5,
          rating: "",
          image: "https://i.imgur.com/WRiVIx0.png",
        },
        {
          name: "MECHI RAMELLA",
          description:
            "Entusiasta del trabajo en equipo y del diseño, acentuado por su ojo arquitectonico curioso,inmerso en las aguas de este nuevo Universo del Hello World!",
          collection: "Team 4",
          serialNumber: "423",
          price: 3.000,
          stock: 3,
          rating: "",
          image: "https://i.imgur.com/XdmXYCm.png",
        
        }, 
        {
          name: "RYU MARTINEZ",
          description:
            "Oriundo del Paraguay y del Back! Gamer Boy de nacimiento, influenciado por su ADN japonés.",
            collection: "Team 4",
          serialNumber: "424",
          price: 3.700,
          stock: 6,
          rating: "",
          image: "https://i.imgur.com/C3LSkx1.png", 
        }, 
        {
          name: "MICA LOZANO",
          description: "Amante del Front. Chica misteriosa si las hay",
          collection: "Team 4",
          serialNumber: "425",
          price: 3.800,
          stock: 1,
          rating: "",
          image: "https://i.imgur.com/QtnC1nW.png",
        }, 
        //Rock Singers
        {
          name: "EVH Eddie Van Halen",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Rock Singers",
          serialNumber: 500,
          price: 7.000,
          stock: 8,
          rating: "",
          image: "https://i.imgur.com/REDe1yB.jpg",
        },  
        {
          name: "Freddie Mercury Radio Gaga",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Rock Singers",
          serialNumber: "501",
          price: 15.000,
          stock: 8,
          rating: "",
          image: "https://i.imgur.com/9GMR4Qc.jpg",
        }, 
        {
          name: "Iggy Pop",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Rock Singers",
          serialNumber: "502",
          price: 9.000,
          stock: 5,
          rating: "",
          image: "https://i.imgur.com/OSGB6Lx.jpg",
        }, 
        {
          name: "Prince 80",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Rock Singers",
          serialNumber: "503",
          price: 7.500,
          stock: 3,
          rating: "",
          image: "https://i.imgur.com/OSGB6Lx.jpg",
        }, 
        {
          name: "Sting The Police",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Rock Singers",
          serialNumber: "504",
          price: 12.000,
          stock: 1,
          rating: "",
          image: "https://i.imgur.com/n1mVWD0.jpg",
        }, 
        {
          name: "Freddie Mercury Wimbledon",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Rock Singers",
          serialNumber: "505",
          price: 15.000,
          stock: 3,
          rating: "",
          image: "https://i.imgur.com/Uo8xdGw.jpg",
        }, 
        //Star Wars
        {
          name: "Concept Series Han Solo",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Star Wars",
          serialNumber: "700",
          price: 12.000,
          stock: 3,
          rating: "",
          image: "https://i.imgur.com/FXg4YFF.jpg",
        },
        {
          name: "Leia (Yavin)",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Star Wars",
          serialNumber: "701",
          price: 10.000,
          stock: 8,
          rating: "",
          image: "https://i.imgur.com/eTtNSOZ.jpg",
        },
        {
          name: "Bo katan Kryze",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Star Wars",
          serialNumber: "702",
          price: 8.500,
          stock: 2,
          rating: "",
          image: "https://i.imgur.com/UoqKGNF.jpg",
        },
        {
          name: "Luke Skywalker",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Star Wars",
          serialNumber: "703",
          price: 15.500,
          stock: 8,
          rating: "",
          image: "https://i.imgur.com/Aovedd7.jpg",
        },
        {
          name: "The Child Grogu With Squid",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Star Wars",
          serialNumber: "704",
          price: 17.500,
          stock: 2,
          rating: "",
          image: "https://i.imgur.com/fbx0zIg.jpg",
        },
        {
          name: "Star Wars - The Mandalorian",
          description: "Marca: Funko Pop! muñecos coleccionables más famosos en todo el mundo. Nos permite disfrutar de nuestros personajes favoritos de cómicS, películas o videojuegos. Material: Vinilo. Fabricados con cabeza de bobble modelado. Dimensiones: 10cm de altura. No recomendado para niños menores de 3 años.",
          collection: "Star Wars",
          serialNumber: "705",
          price: 7.500,
          stock: 6,
          rating: "",
          image: "https://i.imgur.com/mSQSpuk.jpg",
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {},
};