import {
  UPDATE_FIELD,
  SUBMIT_FORM,
  MAKE_FIELD_VALID,
  INVALIDATE_FIELD,
  UPDATE_SHIPPING_COST,
} from '../constants';

export const updateField = (name, value) => ({
  type: UPDATE_FIELD,
  payload: {
    name,
    value,
  },
});

export const makeFieldValid = (name) => ({
  type: MAKE_FIELD_VALID,
  payload: {
    name,
  },
});

export const updateShippingCost = (value) => ({
  type: UPDATE_SHIPPING_COST,
  payload: {
    value,
  },
});

export const invalidateField = (name, errorMessage) => {
  //   debugger;
  return {
    type: INVALIDATE_FIELD,
    payload: {
      name,
      errorMessage,
    },
  };
};

export const submitForm = () => ({
  type: SUBMIT_FORM,
});
