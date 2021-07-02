const { Router } = require('express');
const router = Router();
const userExperience = require('../db/userExperience.json');
const multer = require('../libs/multer')

// get
router.get('/', (req, res) => {
    res.json(userExperience);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const filterExperience = userExperience.filter( el => el.id == id);
    res.json(filterExperience);
})    

router.get('/salas/:nombre', (req, res) => {
    const { nombre } = req.params;
    const filterRoom = userExperience.filter( el => el.room === nombre);
    res.json(filterRoom);
})

// post
router.post('/', multer.single('image'), (req, res) => {
    const { title, description, room, imgAPI } = req.body;
    if ( title && description && room && imgAPI){
        const id = userExperience.length + 1 ;
        const newExperience = {
            title: title,
            description: description,
            room: room,
            imgAPI: imgAPI,
            id: id,
            img: req.file.path
        };
        console.log(newExperience);
        userExperience.push(newExperience);
        res.json('Saved')
    }else {
        res.status(500).json({error: "There was an Error, Require all fields."})
    }
    res.json(userExperience);
})

// put
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, room, imgAPI, img } = req.body;
    if ( title && description && room && imgAPI && img){
        userExperience.forEach( el => {
            if (el.id == id){
                el.title = title;
                el.description = description;
                el.room = room;
                el.imgAPI = imgAPI;
                el.img = img;
            }
        });
        res.json('saved')
    }else {
        res.status(500).json({error: "There was an Error, Require all fields."})
    }
})

// delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    userExperience.forEach( (el, index) => {
        if (userExperience.id == id){
            userExperience.splice(index, 1);
        }
    });
    res.send('The post was Deleted.')
})

module.exports = router;