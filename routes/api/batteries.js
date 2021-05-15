const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Batteries = require('../../models/Batteries');

router.get('/test', (req, res) => res.json({ msg: 'hightlight Works' }));

router.get(
  '/', 
  (req, res) =>{
    Batteries.find()
    .then(batteries =>{
      res.json(batteries)
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  }
);

module.exports = router;
