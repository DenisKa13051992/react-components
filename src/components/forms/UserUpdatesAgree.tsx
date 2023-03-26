import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserUpdatesAgree extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
  }

  render() {
    return (
      <label className="form-item">
        <input type="checkbox" ref={this.props.propRef} />I want to receive updates
      </label>
    );
  }
}

export default UserUpdatesAgree;
