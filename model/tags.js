const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class tags extends Model {}

tags.init(
    {
       id: {
           type: DataTypes.INTEGER,
             autoIncrement: true,
           allowNull: false,
           primaryKey: true,
       },

       tag_name: {
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

module.exports = tags;
