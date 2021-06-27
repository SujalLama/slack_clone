'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('teams', {
     id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
     },
     name: {
       type: Sequelize.STRING,
       unique: true
     },
     owner: {
       type: Sequelize.INTEGER,
       references: {
         model: "users",
         key: 'id'
       }
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};
