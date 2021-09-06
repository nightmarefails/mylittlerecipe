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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refrences: {
                model: 'User',
                key: 'id',
            }

        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user_recipe',
    }
);

module.exports = user_recipe;
