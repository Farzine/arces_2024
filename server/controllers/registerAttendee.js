const Attendee = require("../models/attendee");

const RegisterAttendee = async (req, res) => {
  const attendee = req.body;
  attendee.pin = generatePIN();
  const newAttendee = new Attendee(attendee);
  try {
    await newAttendee.save();
    res.status(201).json(newAttendee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getAllAttendee = async (req, res) => {
  try {
    const attendees = await Attendee.find().select('_id name email university photoUrl');
    res.status(200).json(attendees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAttendeeByID = async (req, res) =>{
  const { id } = req.params;
  try {
    const attendee = await Attendee.findById(id);
    if (!attendee) {
      return res.status(404).json({ message: "Attendee not found" });
    }
    res.status(200).json(attendee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const generatePIN = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

module.exports = { RegisterAttendee, getAllAttendee, getAttendeeByID };
