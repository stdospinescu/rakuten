import React from 'react';
import { connect } from 'react-redux';
import history from '../../init/history';
import calculator from './calculator';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Button from '../../components/Button';
import {
    updateField,
    submitForm,
    makeFieldValid,
    invalidateField,
    updateShippingCost
} from './actions';
import Checkbox from '../../components/Checkbox';
import ErrorMessage from '../../components/ErrorMessage';
import CitySearch from '../CitySearch';
import validate from '../../helpers/validate';
import {
    Container,
    H1,
    FormGroup,
    LocationContainer,
    FieldLabel,
    TermsAndConditions,
    ShippingCost,
    Row21,
    TermsText
} from './styled';

const invalidateEmptyFields = (formFields, dispatch) => {
    Object.keys(formFields).forEach(item => {
        const { value } = formFields[item];
        if (value === '' || !value) {
            dispatch(invalidateField(item, 'This field is required'));
        }
    });
};

const countInvalidFields = formFields => {
    return Object.keys(formFields).reduce((accumulator, item) => {
        if (!formFields[item]['isValid']) {
            return ++accumulator;
        }
        return accumulator;
    }, 0);
};

const Payment = props => {
    const {
        fields,
        shippingCost,
        onUpdateField,
        onSubmitHandler,
        onUpdateShippingCost
    } = props;

    return (
        <Container>
            <form onSubmit={e => onSubmitHandler(e, fields)}>
                <H1>Personal information</H1>
                <FormGroup>
                    <FieldLabel>First name</FieldLabel>
                    <Input
                        placeholder='Your name'
                        value={fields.firstname.value}
                        errorMessage={fields.firstname.errorMessage}
                        onChange={e =>
                            onUpdateField('firstname', e.target.value, {
                                isRequired: true
                            })
                        }
                    />
                </FormGroup>
                <FormGroup>
                    <FieldLabel>Surname</FieldLabel>
                    <Input
                        errorMessage={fields.surname.errorMessage}
                        placeholder='Your surname'
                        value={fields.surname.value}
                        onChange={e =>
                            onUpdateField('surname', e.target.value, {
                                isRequired: true
                            })
                        }
                    />
                </FormGroup>

                <H1>Shipping information</H1>
                <FormGroup>
                    <FieldLabel>Address</FieldLabel>
                    <TextArea
                        errorMessage={fields.address.errorMessage}
                        placeholder='Your address'
                        multiline
                        value={fields.address.value}
                        onChange={e =>
                            onUpdateField('address', e.target.value, {
                                isRequired: true
                            })
                        }
                    />
                </FormGroup>
                <Row21>
                    <FormGroup>
                        <FieldLabel>City</FieldLabel>
                        <LocationContainer>
                            <select
                                onChange={e =>
                                    onUpdateField('country', e.target.value, {
                                        isRequired: true
                                    })
                                }
                            >
                                <option defaultValue value=''>
                                    Select country
                                </option>
                                <option value='de'>germany</option>
                                <option value='at'>austria</option>
                                <option value='es'>spain</option>
                                <option value='fr'>france</option>
                                <option value='uk'>uk</option>
                            </select>
                            <CitySearch
                                country={fields.country.value}
                                update={city => {
                                    onUpdateField('city', city, {
                                        isRequired: true
                                    });
                                    onUpdateShippingCost(fields.country.value);
                                }}
                            />
                        </LocationContainer>
                        {fields.country.errorMessage && (
                            <ErrorMessage>
                                {fields.country.errorMessage}
                            </ErrorMessage>
                        )}
                        {fields.country.value && fields.city.errorMessage && (
                            <ErrorMessage>City field is required</ErrorMessage>
                        )}
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel>Shipping cost</FieldLabel>
                        <ShippingCost>{shippingCost}</ShippingCost>
                    </FormGroup>
                </Row21>

                <H1>Payment method</H1>
                <FormGroup>
                    <FieldLabel>Card name</FieldLabel>
                    <Input
                        errorMessage={fields.cardName.errorMessage}
                        placeholder='Card name'
                        value={fields.cardName.value}
                        onChange={e =>
                            onUpdateField('cardName', e.target.value, {
                                isRequired: true
                            })
                        }
                    />
                </FormGroup>
                <Row21>
                    <FormGroup>
                        <FieldLabel>Card number</FieldLabel>
                        <Input
                            errorMessage={fields.cardNumber.errorMessage}
                            placeholder='Card number'
                            value={fields.cardNumber.value}
                            onChange={e =>
                                onUpdateField('cardNumber', e.target.value, {
                                    isRequired: true,
                                    isNumer: true,
                                    exactLength: 16
                                })
                            }
                        />
                    </FormGroup>
                    <FormGroup>
                        <FieldLabel>CVV</FieldLabel>
                        <Input
                            errorMessage={fields.cvv.errorMessage}
                            placeholder='CVV'
                            value={fields.cvv.value}
                            onChange={e =>
                                onUpdateField('cvv', e.target.value, {
                                    isRequired: true,
                                    isNumer: true,
                                    exactLength: 3
                                })
                            }
                        />
                    </FormGroup>
                </Row21>
                <TermsAndConditions>
                    <Checkbox
                        checked={fields.concent.value}
                        callback={() =>
                            onUpdateField('concent', !fields.concent.value, {
                                isRequired: true
                            })
                        }
                    />
                    <TermsText>Agree terms and conditions</TermsText>
                </TermsAndConditions>
                {fields.concent.errorMessage && (
                    <ErrorMessage>{fields.concent.errorMessage}</ErrorMessage>
                )}

                <Button type='submit'>Send</Button>
            </form>
        </Container>
    );
};

const mapStateToProps = state => {
    const { fields, shippingCost } = state.payment;

    return {
        fields,
        shippingCost
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdateField: (name, value, validationRules) => {
            dispatch(updateField(name, value));

            const { valid, errorMessage } = validate(value, validationRules);
            if (valid) {
                dispatch(makeFieldValid(name));
            } else {
                dispatch(invalidateField(name, errorMessage));
            }
        },

        onSubmitHandler: (e, formFields) => {
            e.preventDefault();

            dispatch(submitForm());

            invalidateEmptyFields(formFields, dispatch);

            if (countInvalidFields(formFields)) return;

            history.push('/thankyou');
        },
        onUpdateShippingCost: value =>
            dispatch(updateShippingCost(calculator(value)))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Payment);
