
const SessionList = require('../models/sessionList');


exports.addSessionList = async (req, res) => {
  try {
    const data = req.body;
    
    if (!data) {
      return res.status(400).json({ message: 'No session list uploaded' });
    }

    const sessionList = new SessionList(data);

    await sessionList.save();
    res.status(200).json({ message: 'Session list uploaded successfully', sessionList });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateSessionList = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedata = req.body;
    const sessionList = await SessionList.findById(id);

    if (!sessionList) {
      return res.status(404).json({ message: 'Session list not found' });
    }


    await SessionList.findByIdAndUpdate(id,updatedata);

    res.status(200).json({ message: 'Session list Updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};









exports.deleteSessionList = async (req, res) => {
  try {
    const { id } = req.params;
    const sessionList = await SessionList.findById(id);

    if (!sessionList) {
      return res.status(404).json({ message: 'SessionList not found' });
    }


    await SessionList.findByIdAndDelete(id);

    res.status(200).json({ message: 'SessionList deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSessionList = async (req, res) => {
  try {
    const sessionList = await SessionList.find();
    res.status(200).json(sessionList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
