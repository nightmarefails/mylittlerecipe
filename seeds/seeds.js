const sequelize = require('../config/connection');
const { Recipe, Tags, recipe_tags, User, user_recipe } = require('../model');
const { formatRecipeData } = require('../utils/formatData')

const recipeData = require('./recipeData');
const tagsData = require('./tagsData.json');
const recipe_tagsData = require('./recipe_tagsData.json')
const userData = require('./userData.json')
const user_recipeData = require('./user_recipeData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const recipeData = require('./recipeData.json');

    //Data has Arrays when SQL is expecting strings. must go through entries and join the arrays into strings
    let recipes = recipeData.map((data) => {
        return formatRecipeData(data)
    });

    await Recipe.bulkCreate(recipes, {
        individualHooks: true,
        returning: true
    });

    await Tags.bulkCreate(tagsData)

    await recipe_tags.bulkCreate(recipe_tagsData);

    await User.bulkCreate(userData);

    await user_recipe.bulkCreate(user_recipeData);
    
    process.exit(0);
}

seedDatabase();