const sequelize = require('../config/connection');
const { Recipe } = require('../model');

const recipeData = require('./recipeData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const recipeData = require('./recipeData.json');
    //Data has Arrays when SQL is expecting strings. must go through entries and join the arrays into strings
    recipeData.map((data) => {
        console.log(data);
    })
    
    process.exit(0);
}

seedDatabase();