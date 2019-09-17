import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
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
