const router = require('express').Router();
const { Recipe, user_recipe } = require('../../model');
const scraper = require('recipe-scraper');
const { formatRecipeData } = require('../../utils/formatData');

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
router.get('/:id', async (req, res) => {
    try {
        const RecipeData = await Recipe.findByPk(req.params.id);

        const IDs = RecipeData.map((recipe) => recipe.get({ plain: true}) );

        res.status(200).json(IDs);


    } catch (err) {
        res.status(500).json(err);
    }
});


//TODO: ADD POST '/' to add a recipe
router.post('/', async (req, res) => {
    try{

        const scraperData = await scraper(req.body.url);

        const recipeData = formatRecipeData(scraperData);

        const recipe = await Recipe.create(recipeData);

        const userRecipeData = {
            recipeId: recipe.id,
            userId: req.session.user_id
        }

        const userRecipe = user_recipe.create(userRecipeData)



        res.status(200).json(recipe);

    } catch (err) {
        res.status(500).json(err);
    }
});


//TODO: ADD PUT '/' to update recipe
router.put('/', async (req, res) => {
    try{
        const recipeData = await Recipe.update(req.body);
        res.status(200).json(recipeData);

    }catch (err) {
        res.status(500).json(err);
    }
})

router.post('/delete', async (req, res) => {
    try{

        const recipeData = await Recipe.destroy({
            where: {
                id: req.body.id
            }
        })

        await user_recipe.destroy({
            where: {
                recipeId: req.body.id
            }
        })

        res.status(200).json(recipeData);

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
