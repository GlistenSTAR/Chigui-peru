const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Oils = require('../../models/Oils');

router.get('/test', (req, res) => res.json({ msg: 'hightlight Works' }));

router.get(
  '/', 
  (req, res) =>{
    Oils.find()
    .then(oils =>{
      res.json(oils)
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No oil data found' }));
  }
);

module.exports = router;
