'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Survey.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numberOfTakersDesired: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      totalPayout: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      surveyIsFunded: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Survey',
  });
  return Survey;
};