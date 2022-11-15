'use strict';

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

  class Survey extends Model {

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
      number_of_takers_desired: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      number_of_takers_fullfilled: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      total_payout: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "company",
          key: "id"
        }
      },
      survey_is_funded: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
  }, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'survey',
  });

  module.exports = Survey;