'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

  class Question extends Model {}

  Question.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      survey_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'survey',
          key: 'id',
        }
      },
      question_text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
  });

  module.exports = Question;