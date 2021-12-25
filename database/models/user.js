'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    toJSON() {
      return {...this.get(), id: undefined};
    }
  }
  User.init(
      {
        email: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        role: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        uuid: {
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          type: DataTypes.UUID,
        },
      },
      {
        modelName: 'User',
        sequelize,
        tableName: 'users',
      },
  );
  return User;
};
