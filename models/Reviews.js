const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ReviewsSchema = new Schema({
  type:{
    type: String
  },
  data: [{
    subname : {
      type: String
    },
    time : {
      type: String
    },
    description : {
      type: String
    },
    price:{
      type:Number
    }
  }]
});

module.exports = Highlight = mongoose.model('reviews', ReviewsSchema);
