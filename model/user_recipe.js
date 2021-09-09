const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class user_recipe extends Model { }

user_recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refrences: {
                model: 'user',
                key: 'id',
            }
        },
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'recipe',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'user_recipe',
    }
);

module.exports = user_recipe;
