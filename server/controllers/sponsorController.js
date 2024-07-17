const cloudinary = require('../config/cloudinary');
const Sponsor = require('../models/sponsor');

exports.uploadSponsorImage = async (req, res) => {
  try {
    const file = req.file;
    const { sponsorName, sponsorType } = req.body;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const image = new Sponsor({
      path: file.path,
      public_id: file.filename,
      sponsorName,
      sponsorType
    });

    await image.save();
    res.status(200).json({ message: 'Sponsor Image uploaded successfully', image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteSponsorImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Sponsor.findById(id);

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    await cloudinary.uploader.destroy(image.public_id);
    await Sponsor.findByIdAndDelete(id);

    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSponsorImages = async (req, res) => {
  try {
    const images = await Sponsor.find();
    res.status(200).json(images);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
