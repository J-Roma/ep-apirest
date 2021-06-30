const { Router } = require('express');
const router = Router();

const userExperience = require('../db/userExperience.json');

router.get('/', (req, res) => {
    res.json(userExperience);
})

router.post('/', (req, res) => {
    res.json(userExperience);
})

module.exports = router;