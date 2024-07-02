const IndustryTrack = require('../models/IndustryTrack');


exports.addIndustryTrack = async (req, res) => {
  const { title, topics } = req.body;

  try {
    const industryTrack = new IndustryTrack({ title, topics });
    await industryTrack.save();
    res.status(201).json({ message: 'Industry track added successfully', industryTrack });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateIndustryTrackTopics = async (req, res) => {
  const { id } = req.params;
  const { topics } = req.body;

  try {
    const industryTrack = await IndustryTrack.findById(id);
    if (!industryTrack) return res.status(404).json({ message: 'Industry track not found' });

    industryTrack.topics = topics;
    await industryTrack.save();
    res.status(200).json({ message: 'Industry track topics updated successfully', industryTrack });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteIndustryTrack = async (req, res) => {
  const { id } = req.params;

  try {
    const industryTrack = await IndustryTrack.findByIdAndDelete(id);
    if (!industryTrack) return res.status(404).json({ message: 'Industry track not found' });

    res.status(200).json({ message: 'Industry track deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getIndustryTracks = async (req, res) => {
  try {
    const industryTracks = await IndustryTrack.find();
    res.status(200).json(industryTracks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
