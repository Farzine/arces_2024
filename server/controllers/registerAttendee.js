const Attendee = require("../models/attendee");

const RegisterAttendee = async(req,res)=>{
    const attendee = req.body;
    const newAttendee = new Attendee(attendee);
    try {
        await newAttendee.save();
        res.status(201).json(newAttendee);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = RegisterAttendee;