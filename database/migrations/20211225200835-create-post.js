'use strict';
module.exports = {
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  },
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      body: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
};
