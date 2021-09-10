const router = require('express').Router();
const { User } = require("../../model");

//TODO: ADD POST '/' to add a user
router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Welcome User'})
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

//TODO ADD POST '/login' route for user
router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ 
            where: { user_name: req.body.user_name } 
        });

        if(!userData) {
            res.status(400).json({ message: 'enter correct username'})
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'enter correct password'})
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Welcome User'})
        });

    }catch (error) {
        res.status(500).json(error);
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

