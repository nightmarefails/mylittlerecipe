const router = require('express').Router();
const { Recipe, User, user_recipe } = require('../model/');

router.use('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: User
        });

        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

        console.log(recipes);

        res.render('recipe', {
            recipes
        });

    } catch (error) {
        res.status(500).json(error);
    }
    
})


module.exports = router;
