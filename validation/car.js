const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCarInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.text : '';
  data.mark = !isEmpty(data.mark) ? data.text : '';
  data.modelName = !isEmpty(data.modelName) ? data.text : '';
  data.date = !isEmpty(data.date) ? data.text : '';
  
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

  if(Validator.isNumber(data.date)){
    errors.date = 'Please input product year.';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
