import validationMessages from './validationMessages';
import {
  minLength,
  maxLength,
  isNotEmpty,
  isNumber,
  exactLength,
  isTrue,
  isUppercase,
} from './validations';

const validate = (value, rules) => {
  let valid = true;
  let errorMessage = '';

  // eslint-disable-next-line
  for (let rule in rules) {
    switch (rule) {
      case 'minLength':
        if (valid && !minLength(value, rules[rule])) {
          errorMessage = validationMessages.minLength(rules[rule]);
        }
        valid = valid && minLength(value, rules[rule]);
        break;
      case 'maxLength':
        if (valid && !maxLength(value, rules[rule])) {
          errorMessage = validationMessages.maxLength(rules[rule]);
        }
        valid = valid && maxLength(value, rules[rule]);
        break;
      case 'isUppercase':
        if (valid && !isUppercase(value)) {
          errorMessage = validationMessages.isUppercase;
        }
        valid = valid && isTrue(value);
        break;
      case 'isTrue':
        if (valid && !isTrue(value)) {
          errorMessage = validationMessages.isTrue;
        }
        valid = valid && isTrue(value);
        break;
      case 'isRequired':
        if (valid && !isNotEmpty(value)) {
          errorMessage = validationMessages.required;
        }
        valid = valid && isNotEmpty(value);
        break;

      case 'isNumer':
        if (valid && !isNumber(value)) {
          errorMessage = validationMessages.number;
        }
        valid = valid && isNumber(value);
        break;

      case 'exactLength':
        if (valid && !exactLength(value, rules[rule])) {
          errorMessage = validationMessages.exactLength(rules[rule]);
        }
        valid = valid && exactLength(value, rules[rule]);
        break;

      default:
        valid = true;
        errorMessage = '';
    }
  }
  return { valid, errorMessage };
};

export default validate;
