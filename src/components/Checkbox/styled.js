import styled from 'styled-components';

const checkboxStyle = `
  width: 18px;
  height: 18px;
  text-align: center;
  border-radius: 4px;
  margin-right: 10px;
`;

export const Container = styled.div`
  cursor: pointer;
`;

export const Unchecked = styled.div`
  ${checkboxStyle};
  border: 1px solid #e6ecee;
`;

export const Checked = styled.div`
  ${checkboxStyle};
  border: 1px solid transparent;
  background-color: #00afd1;

  svg {
    width: 12px;
    height: 12px;
    fill: #fff;
  }
`;
