import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.div`
  font-size: 13px;
  color: #fa6557;
  height: 20px;
  padding: 5px 0;
`;

export default ({ children }) => <ErrorStyle>{children}</ErrorStyle>;
