const User = require('./user');
const Recipe = require('./recipe');
const Tags = require('./tags');
const user_recipe = require('./user_recipe')
const recipe_tags = require('./recipe_tags')

User.belongsToMany(Recipe, {
    through: user_recipe
});

Recipe.belongsToMany(User, {
    through: user_recipe
});

module.exports = {
    User,
    Recipe,
    user_recipe,
    recipe_tags,
    Tags
};