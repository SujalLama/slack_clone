'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('messages', {
     id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
     },
     text: {
            type: Sequelize.STRING,
        },
     channelId: {
       type: Sequelize.INTEGER,
       references: {
         model: "channels",
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
    await queryInterface.dropTable('messages');
  }
};
