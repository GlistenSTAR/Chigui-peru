const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');

// Load Profile Model
const Services = require('../../models/Services');

router.get(
  '/getService',
  (req, res) => {
    Services.find({})
      .then(services => {
        res.json(services);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;
