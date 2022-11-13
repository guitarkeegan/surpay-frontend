'use strict';
const bcrypt = require("bcrypt");
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

  class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8],
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
          isEmail: true,
        },
      }
    },
    {
      hooks: {
        beforeCreate: async (newUser) => {
          try {
            newUser.password = await bcrypt.hash(newUser.password, 10);
            return newUser;
          } catch (err) {
            console.log(err);
            return err;
          }
        },
        beforeUpdate: async (updatedUser) => {
          try {
            updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
            return updatedUser;
          } catch (err) {
            console.log(err);
            return err;
          }
        },
      },
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "user",
    });

    module.exports = User;