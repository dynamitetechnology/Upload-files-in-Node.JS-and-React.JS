const {
    check,
    validationResult
} = require('express-validator');
const cors = require('cors')
const express = require('express');
const router = express.Router()
const multer = require('multer')
const { v4: uuidv4 } = require('uuid');
//storage directory
const DIR = process.env.UPLOAD_DIR;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //         return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    //     }
    // }
});

const controller = require('../controllers/indexController');

router.post('/api/fileupload', cors(), upload.single('file_upload'), controller.fileupload)

module.exports = router;