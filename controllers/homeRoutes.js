const router = require('express').Router();
const { Recipe, User, user_recipe } = require('../model/');
const { revertRecipeData } = require('../utils/formatData');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const recipeData = await Recipe.findAll({
            include: User
        });

        const plainData = recipeData.map((recipe) => recipe.get({ plain: true }));

        const recipes = plainData.map((recipe) => {
            return revertRecipeData(recipe);
        });

        let loggedIn = false;

        if (req.session && req.session.logged_in) {
            loggedIn = true;
        }

        res.render('recipe', {
            recipes,
            loggedIn
        });

    } catch (error) {
        res.status(500).json(error);
    
    }
})

router.get('/account', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            include: Recipe
        })

        const user = userData.get({ plain: true });

        res.render('account', {
            user,
            loggedIn: req.session.logged_in
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

router.get('/addrecipe', withAuth, async(req, res) => {
    try {
        
        res.render('addrecipe', {
            loggedIn: req.session.logged_in
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router;
