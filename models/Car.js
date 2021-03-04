const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const CarSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mark: {
    type: String,
    required: true
  },
  model: [
    {
      modelName: {
        type: String,
      },
      year: [
        {
          date:{
            type:String,
          },
          cylinder:[
            {
              cylinderName:{
                type : String
              }
            }
          ]
        }
      ]
    },
  ],  
});

module.exports = Post = mongoose.model('cars', CarSchema);
