import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserBirthDate extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
  }

  render() {
    return (
      <label className="form-item">
        Select country:
        <input type="date" ref={this.props.propRef} />
      </label>
    );
  }
}

export default UserBirthDate;
