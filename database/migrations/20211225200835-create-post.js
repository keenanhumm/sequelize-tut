'use strict';
module.exports = {
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('posts');
  },
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('posts', {
      body: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
