import React from 'react';
import { Input } from './styled';
import ErrorMessage from '../ErrorMessage';

export default (props) => {
  return (
    <>
      <Input {...props} className={props.errorMessage ? 'error' : ''} />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </>
  );
};
