const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

// Load Profile Model
const Services = require('../../models/Services');
const Quote = require('../../models/Quote');

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

router.post(
  '/save_quote',
  (req, res) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phonenumber: req.body.phonenum,
      detail: req.body.detail,
      date: req.body.date,
      time: req.body.time,
      total_price: req.body.total_price,
      motor: req.body.motor,
      services: req.body.sevices
    });
    newUser.save()
    .then(data => {
      const content = {
        Subject: "Confirm Email",
        HTMLPart: "<a href=\'http://"+CLIENT_ORIGIN+"/confirmed/"+nuserr.id+"\'>Click to confirm email</a>",      
        TextPart: "Copy and paste this link: "+CLIENT_ORIGIN+"/confirm/"+nuserr.id,
        CustomID: "CustomID"
      }
      sendEmail(req.body.email, content)
      .then(()=>{
          res.json({success: true});
      }).catch(err => console.log(err));
    })
    .catch(err => {console.log(err);res.json({success:false, errors: "Los datos no se guardan. Por favor contacte con nosotros."})});
  }
)

module.exports = router;
