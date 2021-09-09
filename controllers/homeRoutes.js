const router = require('express').Router();
const { Recipe, User, user_recipe } = require('../model/');
const { revertRecipeData } = require('../utils/formatData');

router.use('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: User
        });

        const plainData = recipeData.map((recipe) => recipe.get({ plain: true }));

        const recipes = plainData.map((recipe) => {
            return revertRecipeData(recipe);
        });

        console.log(recipes);

        res.render('recipe', {
            recipes
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

router.use('/account', async (req, res) => {
    try {
        const userData = await User.findByPk(1, {
            include: Recipe
        })

        const user = userData.get({ plain: true });

        res.render('account', {
            user
        })
    }
})


module.exports = router;
