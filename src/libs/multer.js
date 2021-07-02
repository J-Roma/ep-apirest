const multer = require('multer');
// const mimeTypes = require('mime-type');
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const uid = uuidv4();

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: async (req, file, cb) => {
       await cb("", uid + "." + path.extname(file.originalname))
    }
})

module.exports = multer({storage});