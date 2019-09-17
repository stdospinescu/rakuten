import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  margin: 100px auto;
`;

export const H1 = styled.h1`
  font-size: 20px;
`;
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  select {
    height: 40px;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const TermsAndConditions = styled.div`
  display: grid;
  grid-template-columns: 30px auto;
  margin-bottom: 20px;
`;

export const ShippingCost = styled.div`
  display: flex;
  align-items: center;
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
`;

export const Row21 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 20px;
`;

export const TermsText = styled.div`
  font-size: 14px;
`;
