const router = require('express').Router();
const { User } = require("../../model")

<<<<<<< HEAD
=======
//TODO: ADD GET all route '/'
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();

        const user = userData.map((user) => user.get({plain: true}));

        res.status(200).json(user);
    } catch (err)  { 
        res.status(500).json(err);
    }
} );


//TODO: ADD GET '/:id' to get user by id
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);

        const user = userData.map((user) => user.get({ plain: true}) );

        res.status(200).json(user);


    } catch (err) {
        res.status(400).json(err);
    }
});
>>>>>>> 48ef95fba731032f7fc6e320dbdba659776d751b

//TODO: ADD POST '/' to add a user
user.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);

        res.status(200).json(userData);

    } catch (err) {
        res.status(400).json(err);
    }
});

<<<<<<< HEAD
//TODO: Add POST '/login'

//TODO: Add POST '/logout'
=======
//TODO ADD PUT '/:id' to update a user
user.put('/', async (req, res) => {
    try{
        const userData = await User.update(req.body);
        res.status(200).json(userData);

    }catch (err) {
        res.status(400).json(err);
    }
})
>>>>>>> 48ef95fba731032f7fc6e320dbdba659776d751b

module.exports = router;