import { StateType, UserCountryForm } from '../../interfaces';
import React, { Component } from 'react';
import { country } from '../../data';

class SelectCountry extends Component<UserCountryForm, StateType> {
  constructor(props: UserCountryForm) {
    super(props);
    this.state = { value: '', isInvalid: props.isInvalidCountry };
  }

  render() {
    return (
      <label className="form-item-label">
        <div className="form-item">
          Select country:
          <select ref={this.props.propRef} data-testid="country-picker">
            {country.map((item: string) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {!this.props.isInvalidCountry && (
          <span className="invalidMessage">Error: choose a country</span>
        )}
      </label>
    );
  }
}

export default SelectCountry;
