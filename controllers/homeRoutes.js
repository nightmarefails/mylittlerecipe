const router = require('express').Router();
const { Recipe, User, user_recipe } = require('../model/');
const { revertRecipeData } = require('../utils/formatData');

router.get('/', async (req, res) => {
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

router.get('/account', async (req, res) => {
    try {
        const userData = await User.findByPk(2, {
            include: Recipe
        });

        const plainData = userData.get({ plain: true });

        console.log(plainData);

        res.render('account');

    } catch (error) {
        res.status(500).json(error);
    }
    
})


module.exports = router;
