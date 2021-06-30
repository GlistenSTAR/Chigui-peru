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
      let services="";
      for(let i=0; i<req.body.sevices.length; i++){
	services +="<tr style='width:100%'><td style='width: 80%;text-align:left'>"+req.body.sevices[i].service_name+"</td><td style='width: 20%;text-align:right'>S/."+req.body.sevices[i].price+"</td></tr>" 
      }
      const content = {
        Subject: "Tu cita en Chigui",
        HTMLPart: "<div style='font-family:'PT Sans',Helvetica,Arial;max-width:700px; width: 100%;margin-left: auto;margin-right: auto;'>\
                     <p style='text-align:left;margin-bottom:0;font-size:1.2em'>Hola "+req.body.name+" </p>\
                     <p style='text-align:left;font-size:1.2em;margin-top:0.5em'>\
                            Gracias por confiar en nosotros y poner tu vehículo en nuestras manos.</p>\
                     <p style='text-align:left'>A continuación los datos de los servicios solicitados:</p>\
                     <div style='margin:auto;max-width:700px;font-family:'PT Sans',Helvetica,Arial;font-size:1.1em' align='center'>\
                        <table cellpadding='0' cellspacing='0' style='width:100%;max-width:1000px;border:1px solid #aaa;border-radius:5px;background-color:#ffffff'>\
                        <tbody><tr><td colspan='4'>\
                              <div style='background:#b3e201;color:#ffffff;text-align:center'>\
                                 <div style='display:inline-block;width:100%;min-width:290px;text-align:left;overflow:auto;vertical-align:top;text-align:right'>\
                                     <div style='padding:0.5em; text-align:center'>\
                                          <span style='font-size:1.2em;font-weight:bold'>"+req.body.motor.motorname+" "+req.body.motor.motormodel+"/"+req.body.motor.motorCylinder+"</span>\
                                    </div>\
                                </div>\
                              </div>\
                             </td></tr>\
                             <tr style='font-size: 1em;'>\
                                <td style='padding:10px;border-bottom: 1px solid grey' colspan='2'>\
                                  <span><b>TRABAJOS Y COTIZACIONES</b></span>\
                                </td>\
                                <td style='padding:10px;border-bottom: 1px solid grey;' colspan='2'>\
                                   <span><b>Sede CHIGUI  MORTORS</b></span>\
                                </td> </tr>\
                           <tr style='font-size: 1em;margin-top:auto; margin-bottom:auto'>\
                               <td style='padding:10px;border-bottom: 1px solid grey; width: 50%;'>\
                                 <table style='width:90%'>  <tbody> "+services+"</tbody>   </table>\
                              </td>\
                              <td style='padding:10px;border-bottom: 1px solid grey; width: 50%' colspan='2'>    <span>"+req.body.date+"<br>"+req.body.time+"</span> </td>\
                            </tr> </tbody>\
                        </table>\
                       <div style='font-size: 0.8em;'>ROY C. D.A<br>\
                            Gerente de Gestión de Clientes</div>\
                        <div style='color:greenyellow; font-size: 0.8;margin-top:20px'><a href='ttp://chigui.com.pe'>Chigui</a></div>\
                    </div>",
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
