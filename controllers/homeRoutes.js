const router = require('express').Router();
const { Recipe } = require('../model/');

router.use('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll()

        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));


        res.status(200).render('recipe', {
            recipes
        });

    } catch (err) {
        res.status(500).json(err);
    }
    
})


module.exports = router;
