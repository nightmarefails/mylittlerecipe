const router = require('express').Router();
const { Recipe } = require('../../model');

//TODO: ADD GET all route '/'
//Finds all the Products
router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll();

        const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
        
        res.status(200).json(recipes);

    } catch (err) {
        res.status(500).json(err);
    }
});

//TODO: ADD Get by id '/:id'
router.get('/:id', (req, res) => {
    try {
        const RecipeData = await Recipe.findByPk(req.params.id);

        const IDs = RecipeData.map((recipe) => recipe.get({ plain: true}) );

        res.status(200).json(IDs);


    } catch (err) {
        res.status(400).json(err);
    }
});


//TODO: ADD POST '/' to add a recipe
router.post('/', async (req, res) => {
    try{
        const recipeData = await Recipe.create(req.body);

        res.status(200).json(recipeData);

    } catch (err) {
        res.status(400).json(err);
    }
});


//TODO: ADD PUT '/' to update recipe
router.put('/', async (req, res) => {
    try{
        const recipeData = await Recipe.update(req.body);
        res.status(200).json(recipeData);

    }catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;
