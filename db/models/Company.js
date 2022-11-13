"use strict"
const bcrypt = require("bcrypt");
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection');

    class Company extends Model {
        checkPassword(loginPw) {
            return bcrypt.compareSync(loginPw, this.password);
          }
    }
    Company.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [8],
                },
            },
        },
        {
            hooks: {
              beforeCreate: async (newCompany) => {
                try {
                  newCompany.password = await bcrypt.hash(newCompany.password, 10);
                  return newCompany;
                } catch (err) {
                  console.log(err);
                  return err;
                }
              },
              beforeUpdate: async (updatedCompany) => {
                try {
                  updatedCompany.password = await bcrypt.hash(updatedCompany.password, 10);
                  return updatedCompany;
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
            modelName: "company",
          }
    )

module.exports = Company;