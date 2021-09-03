const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
       },
       first_name:{
        type:DataTypes.STRING,
        allowNull: false,
       },
       last_name: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       email: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true,

       },
       pass: {
           type: DataTypes.STRING,
           allowNull: false,

       },
       
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    }
);

module.exports = User;