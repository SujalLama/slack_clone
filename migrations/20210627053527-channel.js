'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('channels', {
     id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
     },
    text: {
            type: Sequelize.STRING,
        },
      public: Sequelize.BOOLEAN,
      teamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'teams',
          key: 'id'
        }
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('channels');
  }
};