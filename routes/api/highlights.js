const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Highlight = require('../../models/Highlight');

router.get('/test', (req, res) => res.json({ msg: 'hightlight Works' }));

router.get(
  '/', 
  (req, res) =>{
    Highlight.find()
    .then(highlights =>{
      res.json(highlights)
    })
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
  }
);

module.exports = router;
