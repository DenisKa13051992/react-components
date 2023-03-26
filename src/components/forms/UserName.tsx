import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserName extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    return (
      <label className="form-item">
        User name:
        <input type="text" ref={this.props.propRef} />
      </label>
    );
  }
}

export default UserName;
