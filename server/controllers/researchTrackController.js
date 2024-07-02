const ResearchTrack = require('../models/ResearchTrack');


exports.addResearchTrack = async (req, res) => {
  const { title, topics } = req.body;

  try {
    const researchTrack = new ResearchTrack({ title, topics });
    await researchTrack.save();
    res.status(201).json({ message: 'Research track added successfully', researchTrack });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.updateResearchTrackTopics = async (req, res) => {
  const { id } = req.params;
  const { topics } = req.body;

  try {
    const researchTrack = await ResearchTrack.findById(id);
    if (!researchTrack) return res.status(404).json({ message: 'Research track not found' });

    researchTrack.topics = topics;
    await researchTrack.save();
    res.status(200).json({ message: 'Research track topics updated successfully', researchTrack });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteResearchTrack = async (req, res) => {
  const { id } = req.params;

  try {
    const researchTrack = await ResearchTrack.findByIdAndDelete(id);
    if (!researchTrack) return res.status(404).json({ message: 'Research track not found' });

    res.status(200).json({ message: 'Research track deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getResearchTracks = async (req, res) => {
  try {
    const researchTracks = await ResearchTrack.find();
    res.status(200).json(researchTracks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
