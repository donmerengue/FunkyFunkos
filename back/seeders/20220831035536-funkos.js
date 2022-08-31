
module.exports = {
  async up (queryInterface, Sequelize) {
  //Para cargar elementos a la base de datos
  // npx sequelize-cli db:seed:all para cargar los datos
  

     Example:
      await queryInterface.bulkInsert('Funkos', [
        {
          name:"",
          description: "",
          serialNumber: "",
          price: "",
          stock: "",
          rating: "",
          image: ""
        }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
