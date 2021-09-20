const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const isEmpty = require('../../validation/is-empty');

const Car = require('../../models/Car');
// const Profile = require('../../models/Profile');

//Validation
const validateCarInput = require('../../validation/car');

// @route   GET api/posts/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Car Works' }));

// @route   GET api/cars
// @desc    Get cars
// @access  Public 
router.get('/', (req, res) => {
  Car.find()
    .then(cars => res.json(cars))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get('/:id', (req, res) => {
  Car.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No post found with that ID' })
    );
});

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post(
  '/',  (req, res) => {
    const { errors, isValid } = validateCarInput(req.body);
    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    const addCylinder = { cylinderName : req.body.cylinderName};
    const addYear = { date: req.body.date, cylinder:addCylinder };
    const newModel = { modelName: req.body.modelName, year: addYear };
    Car.findOne({name:req.body.name})
      .then(car => {
        if(!isEmpty(car)){
          let Model = car.model, test_flag = false, date_flag = false, cylinder_flag = false, count1=-1, count2=-1;
          Model.map(item=>{
            count1++;
            if(item.modelName == req.body.modelName){
              test_flag = true;
              item.year.map(date=>{
                count2++;
                if(date.date == req.body.date){
                  date_flag = true;
                  date.cylinder.map(cylinder=>{
                    if(cylinder.cylinderName == req.body.cylinderName){
                      cylinder_flag = true;
                      errors.message = "there is same data";
                      return res.status(400).json(errors);  
                    }
                  });
                  if(!cylinder_flag){
                    car.model[count1].year[count2].cylinder.unshift(addCylinder);
                    car.save().then(car => res.json(car));
                  }
                }
              });
              if(!date_flag){
                car.model[count1].year.unshift(addYear);
                car.save().then(car => res.json(car));
              }
            } 
          });
          if(!test_flag){
            car.model.unshift(newModel);
            car.save().then(car => res.json(car));
          } 
        } else {
          let newCar = new Car({
            name: req.body.name,
            mark: req.body.mark,
            model: newModel
          });
          newCar.save().then(car => res.json(car));
        }
      })
  }
);

module.exports = router;
