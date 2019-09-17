import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  input {
    width: 100%;
    height: 40px;
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
    font-size: 14px;
  }
  z-index: 2;
`;

export const Dropdown = styled.div`
  background-color: #fff;
  padding: 20px;
  top: 50px;
  left: 0px;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  min-height: 40px;
  color: #626262;
  border: 1px solid #e6ecee;
`;

export const DropdownItem = styled.div`
  padding: 5px;
  font-size: 10px;
  color: #626262;
  background-color: #f2f5f7;
  margin-bottom: 5px;
  cursor: pointer;
`;
