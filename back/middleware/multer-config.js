const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const originalName = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        const rename = originalName.split('.' + extension).join('_')
        callback(null, rename + Date.now() + '.' + extension);
    }
});

module.exports = multer({storage: storage}).single('imageUrl');