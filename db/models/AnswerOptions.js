'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnswerOptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AnswerOptions .init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      QuestionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'question',
          key: 'id',
          unique: false
        }
      },
      OptionTest: {
        type: DataTypes.STRING,
        allowNull: false
      },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'AnswerOptions ',
  });
  return AnswerOptions ;
};