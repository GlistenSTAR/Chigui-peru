const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OilsSchema = new Schema({
//   oils: [{
//     name : {
//       type: String
//     },
//     referr : {
//       type: String
//     },
//     price : {
//       type: Number
//     },
//   }]
// });

  name : {
    type: String
  },
  referr : {
    type: String
  },
  price : {
    type: Number
  },
});

module.exports = Highlight = mongoose.model('oils', OilsSchema);
