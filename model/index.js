const User = require('./user');
const Recipe = require('./recipe');
const user_recipe = require('./user_recipe');
const recipe_tags = require('./recipe_tags');
const Tags = require('./tags');

User.belongsToMany(Recipe, {
    through: user_recipe,
    foreignKey: 'recipe_id'
});

Recipe.belongsTo(User, {
    through: user_recipe,
    foreignKey: 'user_id'
});

Recipe.belongsToMany(Tags, {
    through: recipe_tags,
    foreignKey: 'recipe_id'
});

Tags.belongsToMany(Recipe, {
    through: recipe_tags,
    foreignKey: 'tag_id'
});

module.exports = {
    User,
    Recipe,
    user_recipe,
    recipe_tags,
    Tags
};