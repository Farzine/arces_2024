const ImportantDate = require('../models/ImportantDate');
const moment = require('moment');  

// Add a new important date
exports.addImportantDate = async (req, res) => {
  const { date, description } = req.body;

  try {
    const formattedDate = moment(date).format('DD MMMM, YYYY');  // Format date as "30 June, 2024"
    const importantDate = new ImportantDate({
      date: formattedDate,
      description
    });

    await importantDate.save();
    res.status(201).json({ message: 'Important date added successfully', importantDate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete an important date by ID
exports.deleteImportantDate = async (req, res) => {
  const { id } = req.params;

  try {
    const importantDate = await ImportantDate.findByIdAndDelete(id);
    if (!importantDate) return res.status(404).json({ message: 'Important date not found' });

    res.status(200).json({ message: 'Important date deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all important dates
exports.getImportantDates = async (req, res) => {
  try {
    const importantDates = await ImportantDate.find();
    res.status(200).json(importantDates);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
