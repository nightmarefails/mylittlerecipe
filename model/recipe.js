const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    {
       id: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false,
           refrences: {
               model: 'user_recipe',
               key: 'recipe_id',
           }
       },
       name:{
        type:DataTypes.STRING,
        allowNull: false,
       },
       description: {
           type: DataTypes.STRING,
           allowNull: false,
       },
       ingredients: {
           type: DataTypes.STRING,
           allowNull: false,
           unique: true,

       },
       instructions: {
           type: DataTypes.STRING,
           allowNull: false,

       },
       time: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    servings: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    image: {
        type: DataTypes.STRING,

    },
       
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Recipe',
    }
);

module.exports = User;