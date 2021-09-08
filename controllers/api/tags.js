const router = require('express').Router();
const { Tags } = require("../../model")
//TODO: ADD GET all route '/'
router.get('/', async (req, res) => {
    try {
        const tagsData = await Tags.findAll();

        const tags = tagsData.map((tags) => tags.get({plain: true}));

        res.status(200).json(tags);
    } catch (err)  { 
        res.status(500).json(err);
    }
} );


//TODO: ADD POST '/' to add a tag
router.post('/', async (req, res) => {
    try { 
        const tagsData = await Tags.create(req.body);

        res.status(200).json(tagsData);
    }catch (err) {
        res.status(400).json(err);
    }

});



module.exports = router;
