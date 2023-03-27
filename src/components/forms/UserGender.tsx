import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserGender extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
    this.state = { value: '', isInvalid: props.isInvalidGender };
  }

  render() {
    return (
      <label className="form-item-label">
        <div className="form-item">
          <div>
            <input type="radio" name="gender" ref={this.props.propMaleRef} />
            Male
          </div>
          <div>
            <input type="radio" name="gender" ref={this.props.propFemaleRef} />
            Female
          </div>
        </div>
        {!this.props.isInvalidGender && (
          <span className="invalidMessage">Error: choose your gender</span>
        )}
      </label>
    );
  }
}

export default UserGender;
