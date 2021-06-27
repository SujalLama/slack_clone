'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('members', {
     id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
     },
     teamId: {
       type: Sequelize.INTEGER,
       references: {
         model: "teams",
         key: 'id'
       }
     },
     userId: {
       type: Sequelize.INTEGER,
       references: {
         model: "users",
         key: 'id'
       }
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('members');
  }
};
