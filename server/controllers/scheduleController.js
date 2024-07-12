const cloudinary = require('../config/cloudinary');
const Schedule = require('../models/schedule');


exports.addSchedule = async (req, res) => {
  try {
    const data = req.body;
    
    if (!data) {
      return res.status(400).json({ message: 'No schedule uploaded' });
    }

    const schedule = new Schedule(data);

    await schedule.save();
    res.status(200).json({ message: 'Schedule uploaded successfully', schedule });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const schedule = await Schedule.findById(id);

    if (!schedule) {
      return res.status(404).json({ message: 'schedule not found' });
    }


    await Schedule.findByIdAndDelete(id);

    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.find();
    res.status(200).json(schedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
