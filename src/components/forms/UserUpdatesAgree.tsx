import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserUpdatesAgree extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
    this.state = { value: '', isInvalid: props.isInvalidAgree };
  }

  render() {
    return (
      <label className="form-item-label">
        <div className="form-item">
          <input type="checkbox" ref={this.props.propRef} />I want to receive updates
        </div>
      </label>
    );
  }
}

export default UserUpdatesAgree;
