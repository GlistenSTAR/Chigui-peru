const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Electronics = require('../../models/Electronics');

router.get('/test', (req, res) => res.json({ msg: 'Electronic Works' }));

router.get(
  '/', 
  (req, res) =>{
    Electronics.find()
    .then(Electronics =>{
      res.json(Electronics)
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  }
);

module.exports = router;
