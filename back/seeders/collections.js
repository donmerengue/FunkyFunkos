module.exports = {

    async up (queryInterface, Sequelize) {
   
       Example:
        await queryInterface.bulkInsert('Collections', [
          {name:"Team 4", createdAt:"01/08/2022", updatedAt: "01/08/2022"},
          {name:"Rock Singers",createdAt:"01/08/2022",updatedAt: "01/08/2022"},
          {name:"Star Wars",createdAt:"01/08/2022",updatedAt: "01/08/2022"},
          
        ], {});
    },
  
    async down(queryInterface, Sequelize) {},
  };