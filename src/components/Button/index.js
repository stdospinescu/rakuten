import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 13px;
  color: #626262;
  background-color: #f2f5f7;
  height: 40px;
  padding: 0px 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 700;
`;

export default ({ children, ...rest }) => <Button {...rest}>{children}</Button>;
