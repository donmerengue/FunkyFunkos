module.exports = {

  async up (queryInterface, Sequelize) {
 
     Example:
      await queryInterface.bulkInsert('Funkos', [
        {
          name:"LUCAS PARMA",
          description: "Team Front. Vendedor de nuevas tecnologías y psicólogo. Fanático de la música y de quemar tostadas. Aviso: no usa turbante, es solo su cabellera indomable",
          collection: "Team 4",
          serialNumber: "420",
          price: "$3.200",
          stock: "1",
          rating: "",
          image: "https://i.imgur.com/0Q1QXkS.png",
         
        },
        {
          name: "STANY BERBEROVA",
          description:
            "Políglota Búlgara Girl, de corazón Argentino. Ser pensante y cauteloso. Interesada por la inteligencia Artificial.",
            collection: "Team 4",
          serialNumber: "421",
          price: "$3.500",
          stock: "2",
          rating: "",
          image: "https://i.imgur.com/ta7xXAt.png",
        }, 
        {
          name: "BAUTI PETRICH ",
          description:
            "Amante del mate como todo Entrerriano. Futuro Aussie boy. Cautivado por el back y por el estilo de vida digital.",
            collection: "Team 4",
          serialNumber: "422",
          price: "$3.300",
          stock: "5",
          rating: "",
          image: "https://i.imgur.com/WRiVIx0.png",
         
        }, 
        {
          name: "MECHI RAMELLA",
          description:
            "Entusiasta del trabajo en equipo y del diseño, acentuado por su ojo arquitectonico curioso,inmerso en las aguas de este nuevo Universo del Hello World!",
            collection: "Team 4",
          serialNumber: "423",
          price: "$3.000",
          stock: "3",
          rating: "",
          image: "https://i.imgur.com/XdmXYCm.png",
        
        }, 
        {
          name: "RYU MARTINEZ",
          description:
            "Oriundo del Paraguay y del Back! Gamer Boy de nacimiento, influenciado por su ADN japonés.",
            collection: "Team 4",
          serialNumber: "424",
          price: "$3.700",
          stock: "6",
          rating: "",
          image: "https://i.imgur.com/C3LSkx1.png", 
        }, 
        {
          name: "MICA LOZANO",
          description: "Amante del Front. Chica misteriosa si las hay",
          collection: "Team 4",
          serialNumber: "425",
          price: "$3.800",
          stock: "1",
          rating: "",
          image: "https://i.imgur.com/QtnC1nW.png",
        },         
      ], {});
  },

  async down (queryInterface, Sequelize) {}

};
