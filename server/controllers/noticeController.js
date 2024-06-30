const Notice = require('../models/Notice');

// Add a new notice
exports.addNotice = async (req, res) => {
  const { title, description } = req.body;

  try {
    const notice = new Notice({ title, description });
    await notice.save();
    res.status(201).json({ message: 'Notice added successfully', notice });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a notice by ID
exports.deleteNotice = async (req, res) => {
  const { id } = req.params;

  try {
    const notice = await Notice.findByIdAndDelete(id);
    if (!notice) return res.status(404).json({ message: 'Notice not found' });

    res.status(200).json({ message: 'Notice deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all notices
exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
