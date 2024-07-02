const multer = require('multer');
const cloudinary = require('./cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Cloudinary folder name
    format: async (req, file) => 'webp', // convert to webp
    public_id: (req, file) => file.originalname.split('.')[0], // use the file name as public ID
  },
});


const upload = multer({ storage: storage });

module.exports = upload;
