'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
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
      }
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
})
  return Company;
};