const sequelize = require('../model/index');
const { Recipe } = require('../model');

const recipeData = require('./recipeData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Recipe.bulkCreate(recipeData, {
        individualHooks: true,
        returning: true
    });

    process.exit(0);
}

seedDatabase();