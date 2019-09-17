const validationMessages = {
  required: 'This field is mandatory',
  number: 'This field should contain a number',
  isUppercase: 'This field should be in uppercase',
  minLength: (length) =>
    `This field should contain at least ${length} characters`,
  maxLength: (length) => `This field should contain max ${length} characters`,
  exactLength: (length) =>
    `This field should contain exact ${length} characters`,
  isTrue: 'Is not boolean value or true',
};
export default validationMessages;
