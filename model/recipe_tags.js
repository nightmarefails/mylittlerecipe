const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class recipe_tags extends Model { }

recipe_tags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        recipe_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refrences: {
                model: 'recipe',
                key: 'id',
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tag',
                key: 'id'
            }

        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe_tag',
    }
);

module.exports = recipe_tags;
