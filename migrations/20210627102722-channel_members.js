'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('channel_members', {
     id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
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
    await queryInterface.dropTable('channel_members');
  }
};
