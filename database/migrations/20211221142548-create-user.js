'use strict';
module.exports = {
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users');
  },
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      uuid: {
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
    });
  },
};
