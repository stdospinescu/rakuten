import React from 'react';
import PropTypes from 'prop-types';
import { Container, Unchecked, Checked } from './styled';
import CheckedIcon from '../../assets/svg/checked-icon';

const Checkbox = ({ checked, callback }) => {
  return (
    <Container onClick={() => callback()}>
      {checked ? (
        <Checked>
          <CheckedIcon />
        </Checked>
      ) : (
        <Unchecked />
      )}
    </Container>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Checkbox;
