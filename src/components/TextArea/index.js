import React from 'react';
import styled from 'styled-components';
import ErrorMessage from '../ErrorMessage';

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 100px;
  box-sizing: border-box;
  border-radius: 3px;
  width: 100%;
  padding: 20px;
  color: #626262;
  border: 1px solid #e6ecee;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  font-size: 14px;
  &.error {
    border-color: #fa6557;
  }
`;

export default (props) => {
  return (
    <>
      <TextArea {...props} className={props.errorMessage ? 'error' : ''} />
      {props.errorMessage && <ErrorMessage>{props.errorMessage}</ErrorMessage>}
    </>
  );
};
