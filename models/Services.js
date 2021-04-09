const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ServicesSchema = new Schema({
  service_type: {
    type:String
  },
  data :[{
    name: {
      type: String
    },
    subdata:[
      {
        subname : {
          type : String
        },
        price: { 
          type : String
        },
        service_list : { 
          type : Array 
        }
      }
    ]
  }] 
});

module.exports = Services = mongoose.model('services', ServicesSchema);
