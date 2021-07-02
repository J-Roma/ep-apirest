const { Router } = require('express');
const router = Router();

const multer = require('../libs/multer')

router.post('/', multer.single('image') ,(req, res) =>{
    res.json({
        message: 'Listo'
    })
})


module.exports = router;    