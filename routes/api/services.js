const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

// Load Profile Model
const Services = require('../../models/Services');

router.get('/test', (req, res)=>console.log("test"));

router.get(
  '/total_diagonse',
  (req, res) => {
    Services.findOne({service_type: "total_diagonse"})
      .then(services => {
        res.json(services.data);
      })
      .catch(err => res.status(404).json(err));
  }
);

router.post(
  '/total_diagonse',
  (req, res) => {
    console.log(Services);
    // Services.findOne({service_type: "total_diagonse"})
    // .then( service =>{
    //   if(service){
    //     res.json('Already service exist!!')
    //   } else {
    //     const subdata={
    //       subname : req.body.subname,
    //       price : req.body.price,
    //       servicelist: req.body.servicelist
    //     };
    //     const newData = new Services({
    //       name: req.body.name,
    //       subdata: subdata
    //     })
    //     console.log(newData);
    //   }
    // });
  }
)

module.exports = router;
