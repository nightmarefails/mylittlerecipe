const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class user_recipe extends Model {}

user_recipe.init(
    {
       id: {
           type: DataTypes.INTEGER,
             autoIncrement: true,
           allowNull: false,
       },
       user_id:{
        type:DataTypes.INTEGER,
        allowNull: false,
        refrences: {
            model: 'User',
            key: 'id',
        }
        
       },
       recipe_id: {
           type: DataTypes.INTEGER,
           allowNull: false,
           primaryKey: true,
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

module.exports = user_recipe;
