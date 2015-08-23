var multer = require('multer');

module.exports = {
    storage: multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function(req, file, cb) {
            var extension = file.originalname.substring(file.originalname.lastIndexOf('.'));
            cb(null, file.fieldname + '-' + Date.now() + extension);
        }
    }),
    fileFilter: function(req, file, cb) {
        var accepted = ['image/jpeg', 'image/x-windows-bmp', 'image/bmp', 'image/png'];
        if (accepted.indexOf(file.mimetype) !== -1) {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
    imgNames: ['img-1', 'img-2', 'img-3', 'img-4']
}