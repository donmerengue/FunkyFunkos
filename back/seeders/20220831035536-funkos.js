module.exports = {
  async up(queryInterface, Sequelize) {
    //Para cargar elementos a la base de datos
    // npx sequelize-cli db:seed:all para cargar los datos

    Example: await queryInterface.bulkInsert(
      "Funkos",
      [
        {
          name: "LUCAS PARMA",
          description:
            "Team Front. Vendedor de nuevas tecnologías y psicólogo. Fanático de la música y de quemar tostadas. Aviso: no usa turbante, es solo su cabellera indomable.",
          serialNumber: "#420",
          price: "$3.200",
          stock: "1",
          rating: "",
          image: "https://imgur.com/0Q1QXkS",
        },
        {
          name: "STANY BERBEROVA",
          description:
            "Políglota Búlgara Girl, de corazón Argentino. Ser pensante y cauteloso. Interesada por la inteligencia Artificial.",
          serialNumber: "#421",
          price: "$3.500",
          stock: "2",
          rating: "",
          image: "https://imgur.com/ta7xXAt",
        },
        {
          name: "BAUTI PETRICH ",
          description:
            "Amante del mate como todo Entrerriano. Futuro Aussie boy. Cautivado por el back y por el estilo de vida digital.",
          serialNumber: "#422",
          price: "$3.300",
          stock: "5",
          rating: "",
          image: "https://imgur.com/WRiVIx0",
        },
        {
          name: "MECHI RAMELLA",
          description:
            "Entusiasta del trabajo en equipo y del diseño, acentuado por su ojo arquitectonico curioso, inmerso en las aguas de este nuevo Universo del Hello World!",
          serialNumber: "#423",
          price: "$3.000",
          stock: "3",
          rating: "",
          image: "https://imgur.com/XdmXYCm",
        },
        {
          name: "RYU MARTINEZ",
          description:
            "Oriundo del Paraguay y del Back! Gamer Boy de nacimiento, influenciado por su ADN japonés.",
          serialNumber: "#424",
          price: "$3.700",
          stock: "6",
          rating: "",
          image: "https://imgur.com/C3LSkx1",
        },
        {
          name: "MICA LOZANO",
          description: "Amante del Front. Chica misteriosa si las hay.",
          serialNumber: "#425",
          price: "$3.800",
          stock: "1",
          rating: "",
          image: "https://imgur.com/QtnC1nW",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
