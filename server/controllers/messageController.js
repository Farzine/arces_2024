const Messages = require('../models/messages');


exports.addMessages = async (req, res) => {
  const { messages } = req.body;

  try {
    const message = new Messages({ messages });
    await message.save();
    res.status(201).json({ message: 'Message added successfully', message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteMessages = async (req, res) => {
  const { id } = req.params;

  try {
    const message = await Messages.findByIdAndDelete(id);
    if (!message) return res.status(404).json({ message: 'Message not found' });

    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getMessages = async (req, res) => {
  try {
    const message = await Messages.find();
    res.status(200).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.editMessages = async (req, res) => {
  const { id } = req.params;
  const { messages } = req.body;

  try {
    const message = await Messages.findByIdAndUpdate(
      id,
      { messages },
      { new: true, runValidators: true }
    );

    if (!message) return res.status(404).json({ message: 'Messages not found' });

    res.status(200).json({ message: 'Messages updated successfully', message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


// Handle show/hide
exports.ShowMessages = async (req, res) => {
  const { id } = req.params;
  const {show} = req.body;

  
  try {
    const message = await Messages.findByIdAndUpdate(
      id,
      { show },
      { new: true, runValidators: true }
    );

    if (!message) return res.status(404).json({ message: 'Messages not found' });

    res.status(200).json({ message: 'Messages Show Status updated successfully', message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }

}