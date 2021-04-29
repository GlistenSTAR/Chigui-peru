const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HighlightSchema = new Schema({
  serviceName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  data: [{
    detail : {
      type: Array
    }
  }]
});

module.exports = Highlight = mongoose.model('highlights', HighlightSchema);
