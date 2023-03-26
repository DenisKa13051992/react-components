import { StateType, UserCountryForm } from '../../interfaces';
import React, { Component } from 'react';
import { country } from '../../data';

class SelectCountry extends Component<UserCountryForm, StateType> {
  constructor(props: UserCountryForm) {
    super(props);
  }

  render() {
    return (
      <label className="form-item">
        Select country:
        <select ref={this.props.propRef}>
          {country.map((item: string) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default SelectCountry;
