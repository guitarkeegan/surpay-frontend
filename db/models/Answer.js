"use strict"
const { Model, DataTypes } = require("sequelize")

const sequelize = require("../connection")

class Answer extends Model {}

Answer.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "question",
                key: "id",
            },
        },
        answer_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        times_selected: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "answer",
    }
)

module.exports = Answer
