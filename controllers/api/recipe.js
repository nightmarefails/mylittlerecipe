const router = require('express').Router();
const { Recipe } = require('../../model');

//TODO: ADD GET all route '/'
//Finds all the Products
router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll();

        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        
        res.render('main', {
            recipes
        })

    } catch (err) {
        res.status(500).json(err);
    }
})

//TODO: ADD Get by id '/:id'

//TODO: ADD POST '/' to add a recipe

//TODO: ADD PUT '/' to update recipe



module.exports = router;
