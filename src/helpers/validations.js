export const minLength = (value, min) => {
  return value.length >= min;
};
export const isTrue = (value) => {
  return typeof value === 'boolean' && value;
};
export const exactLength = (value, fix) => {
  return value.length === fix;
};
export const maxLength = (value, max) => {
  return value.length <= max;
};

export const isNotEmpty = function(value) {
  return new RegExp(/\S+/).test(value);
};
export const isNumber = function(value) {
  return new RegExp(/^\d+$/).test(value);
};

export const hasNumber = (value) => {
  return new RegExp(/[0-9]/).test(value);
};

export const isUppercase = (value) => {
  return new RegExp(/^[A-Z ]+$/).test(value);
};

export const hasSpecial = (value) => {
  return new RegExp(/[!#@$%^&*)(+=._-]/).test(value);
};
