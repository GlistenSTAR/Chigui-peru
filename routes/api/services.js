const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const sendEmail = require('../../models/send.mail')

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
        HTMLPart: "<div style='font-family:'PT Sans',Helvetica,Arial'>\
                    <p style='text-align:left;margin-bottom:0;font-size:1.2em'>Hola "+req.body.name+",</p>\
                    <p style='text-align:left;font-size:1.2em;margin-top:0.5em'>\
                      Gracias por confiar en nosotros y poner tu vehículo en nuestras manos.</p>\
                    <p style='text-align:left'>A continuación los datos de los servicios solicitados:</p>\
                    <div style='margin:auto;max-width:700px;font-family:'PT Sans',Helvetica,Arial;font-size:1.1em'>\
                      <table cellpadding='0' cellspacing='0' style='width:100%;border:1px solid #aaa;border-radius:5px;background-color:#ffffff'>\
                        <tbody><tr><td>\
                              <div style='background:#10b472;color:#ffffff;text-align:center'>\
                                  <div style='display:inline-block;width:50%;min-width:290px;text-align:left;overflow:auto;vertical-align:top;text-align:right'>\
                                      <div style='padding:0.5em'>\
                                          <span style='font-size:1.2em;font-weight:bold'>"+req.body.motor.motorname+' '+req.body.motor.motormodel+'/'+req.body.motor.motorCylinder+"</span>\
                                      </div>\
                                  </div>\
                              </div>\
                          </td>\
                        </tr></tbody>\
                      </table>\
                    </div></div>",      
        TextPart: "",
        CustomID: ""
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
