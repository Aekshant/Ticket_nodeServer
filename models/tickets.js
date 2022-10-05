'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tickets.init({
    userId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    depart: DataTypes.STRING,
    return: DataTypes.STRING,
    adults: DataTypes.INTEGER,
    children: DataTypes.INTEGER,
    travelClass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tickets',
  });
  return tickets;
};