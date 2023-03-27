import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserBirthDate extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
    this.state = { value: '', isInvalid: props.isInvalidBirthDate };
  }

  render() {
    return (
      <label className="form-item-label">
        <div className="form-item">
          Select birthDate:
          <input type="date" ref={this.props.propRef} />
        </div>
        {!this.props.isInvalidBirthDate && (
          <span className="invalidMessage">Error: incorrect date</span>
        )}
      </label>
    );
  }
}

export default UserBirthDate;
