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
            recipes,
            loggedIn: false
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

        const user = userData.get({ plain: true });
        console.log(user);

        res.render('account', {
            user
        });

    } catch (error) {
        res.status(500).json(error);
    }
    
})

router.get('/addrecipe', async(req, res) => {
    try {
        
        res.render('addrecipe')
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router;
