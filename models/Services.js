const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ServicesSchema = new Schema({
  servicesName: {
    type: String
  },
  data:[
    {
      smallHeader : {
        type : String
      },
      price: { 
        type : String
      },
      miniServices : { 
        type : Array 
      }
    }
  ],
  clickEventData : { 
    type : Object 
  },
  onEngineBack : { 
    type : String
  },
  onEngineModal : {
    type : String
  },
  onEngineModalClose : { 
    type : String
  }
});

module.exports = Services = mongoose.model('services', ServicesSchema);
