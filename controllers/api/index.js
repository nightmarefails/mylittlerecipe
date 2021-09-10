const router = require('express').Router();
const recipe = require('./recipe');
const tags = require('./tags')
const user = require('./user');

//TODO: Import Route Files
router.use('/recipes', recipe);
router.use('/tags', tags );
router.use('/user', user);

module.exports = router;
