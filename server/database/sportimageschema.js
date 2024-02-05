





// sportModel.js
const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

const Sport = mongoose.model('Sportimages', sportSchema);

module.exports = Sport;
