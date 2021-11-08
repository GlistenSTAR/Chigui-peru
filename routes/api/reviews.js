const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Reviews = require('../../models/Reviews');

router.get('/test', (req, res) => res.json({ msg: 'reviews Works' }));

router.get(
  '/',
  (req, res) => {
    Reviews.find()
      .then(reviews => {
        res.json(reviews)
      })
      .catch(err => res.status(404).json({ nopostsfound: 'No oil data found' }));
  }
);

module.exports = router;
