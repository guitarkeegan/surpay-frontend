'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

  class UserSurvey extends Model {}

  UserSurvey.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      survey_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'survey',
          key: 'id'
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_survey',
  });

  module.exports = UserSurvey;