import multer from 'multer';

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, file.originalname);  // Fixing the typo from 'orignalname' to 'originalname'
    }
});

const upload = multer({ storage });

export default upload;

