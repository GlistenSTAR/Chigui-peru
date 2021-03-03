const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCarInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.mark = !isEmpty(data.mark) ? data.mark : '';
  data.modelName = !isEmpty(data.modelName) ? data.modelName : '';
  data.date = !isEmpty(data.date) ? data.date : '';
  
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required.';
  }
  if (Validator.isEmpty(data.mark)) {
    errors.mark = 'Mark field is required.';
  }
  if (Validator.isEmpty(data.modelName)) {
    errors.modelName = 'Model Name field is required.';
  }
  if (Validator.isEmpty(data.date)) {
    errors.date = 'Date field is required.';
  }
  
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
