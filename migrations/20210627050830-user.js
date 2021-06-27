'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', {
     id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
     },
      username: {
            type: Sequelize.STRING,
            unique: true,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        password: Sequelize.STRING,
        token: Sequelize.STRING
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
