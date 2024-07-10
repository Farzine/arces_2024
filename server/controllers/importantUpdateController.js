const ImportantUpdate = require('../models/ImportantUpdate');


exports.addImportantUpdate = async (req, res) => {
  const { title } = req.body;

  try {
    const importantUpdate = new ImportantUpdate({ title });
    await importantUpdate.save();
    res.status(201).json({ message: 'ImportantUpdate added successfully', importantUpdate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.deleteImportantUpdate = async (req, res) => {
  const { id } = req.params;

  try {
    const importantUpdate = await ImportantUpdate.findByIdAndDelete(id);
    if (!importantUpdate) return res.status(404).json({ message: 'ImportantUpdate not found' });

    res.status(200).json({ message: 'ImportantUpdate deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};


exports.getImportantUpdate = async (req, res) => {
  try {
    const importantUpdate = await ImportantUpdate.find();
    res.status(200).json(importantUpdate);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.editImportantUpdate = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const importantUpdate = await ImportantUpdate.findByIdAndUpdate(
      id,
      { title },
      { new: true, runValidators: true }
    );

    if (!importantUpdate) return res.status(404).json({ message: 'ImportantUpdate not found' });

    res.status(200).json({ message: 'ImportantUpdate updated successfully', importantUpdate });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
