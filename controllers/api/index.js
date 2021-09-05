const router = require('express').Router();
const recipe = require('./recipe');

//TODO: Import Route Files
router.use('/recipes', recipe);


module.exports = router;
