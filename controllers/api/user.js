const router = require('express').Router();
const { User } = require("../../model")

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

//TODO: ADD POST '/' to add a user
user.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);

        res.status(200).json(userData);

    } catch (err) {
        res.status(400).json(err);
    }
});

//TODO ADD PUT '/:id' to update a user
user.put('/', async (req, res) => {
    try{
        const userData = await User.update(req.body);
        res.status(200).json(userData);

    }catch (err) {
        res.status(400).json(err);
    }
})

//TODO ADD POST '/login' route for user
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: { user_name: req.body.user_name } });

        if(!userData) {
            res.status(400).json({ message: 'enter correct username'})
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'enter correct password'})
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Welcome User'})
        });

    }catch (err) {
        res.status(400).json(err);
    }
})

//TODO ADD POST '/logout' route for user
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
