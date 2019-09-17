import React from 'react';
import { connect } from 'react-redux';
import { Container, Dropdown, DropdownItem } from './styled';
import { asyncFetchCity, updateCity, clearCities } from './actions';
import shortId from 'short-id';

const CitySearch = ({
  onUpdateCity,
  onFetchData,
  onClearCities,
  city,
  cities,
  country,
  update,
}) => {
  const onChangeHandler = (country, value) => {
    onUpdateCity(value);

    if (value.length >= 3) {
      onFetchData(country, value);
    }
  };

  const cityClickHandler = (value) => {
    update(value);
    onUpdateCity(value);
    onClearCities();
  };

  return (
    <Container>
      <input
        onChange={(e) => onChangeHandler(country, e.target.value)}
        disabled={country === ''}
        value={city}
        placeholder="Please type 3 characters"
      />
      {cities.length ? (
        <Dropdown>
          {cities.map((item) => (
            <DropdownItem
              onClick={() => cityClickHandler(item)}
              key={shortId.generate()}
            >
              {item}
            </DropdownItem>
          ))}
        </Dropdown>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { city, cities } = state.citySearch;

  return {
    city,
    cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateCity: (value) => dispatch(updateCity(value)),
    onFetchData: (country, value) => dispatch(asyncFetchCity(country, value)),
    onClearCities: () => dispatch(clearCities()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CitySearch);
