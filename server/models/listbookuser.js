'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class listBookUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  listBookUser.init({
    idUser: DataTypes.INTEGER,
    idBooks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'listBookUser',
  });
  return listBookUser;
};