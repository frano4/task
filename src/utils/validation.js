import { isInteger } from 'lodash'; 

const validation = data => {
  let isValid = false;
  const { email, amount } = data;

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validateEmail = emailRegex.test(email.toLowerCase());
  const validateAmount = isInteger(amount) && amount > 0;

  if (validateEmail && validateAmount) {
    isValid = true;
  } 

  return isValid;
};

export default validation;