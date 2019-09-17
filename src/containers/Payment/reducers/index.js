import {
    UPDATE_FIELD,
    SUBMIT_FORM,
    INVALIDATE_FIELD,
    MAKE_FIELD_VALID,
    UPDATE_SHIPPING_COST
} from '../constants';
import produce from 'immer';

const initialState = {
    shippingCost: 0,
    isSubmited: false,
    fields: {
        firstname: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        surname: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        address: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        country: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        city: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        cardName: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        cardNumber: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        cvv: {
            value: '',
            errorMessage: '',
            isValid: false
        },
        concent: {
            value: false,
            errorMessage: '',
            isValid: false
        }
    }
};

const updateField = (state, action) =>
    produce(state, draft => {
        draft.fields[action.payload.name]['value'] = action.payload.value;
    });

const submitForm = state =>
    produce(state, draft => {
        draft.isSubmited = true;
    });

const makeFieldValid = (state, action) =>
    produce(state, draft => {
        draft.fields[action.payload.name]['errorMessage'] = '';
        draft.fields[action.payload.name]['isValid'] = true;
    });

const invalidateField = (state, action) =>
    produce(state, draft => {
        draft.fields[action.payload.name]['errorMessage'] =
            action.payload.errorMessage;
        draft.fields[action.payload.name]['isValid'] = false;
    });

const updateShippingCost = (state, action) =>
    produce(state, draft => {
        draft.shippingCost = action.payload.value;
    });

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIELD:
            return updateField(state, action);
        case SUBMIT_FORM:
            return submitForm(state);
        case MAKE_FIELD_VALID:
            return makeFieldValid(state, action);
        case INVALIDATE_FIELD:
            return invalidateField(state, action);
        case UPDATE_SHIPPING_COST:
            return updateShippingCost(state, action);
        default:
            return state;
    }
};
