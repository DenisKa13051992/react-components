import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserName extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
    this.state = { value: '', isInvalid: props.isInvalidName };
  }

  render() {
    return (
      <label className="form-item-label">
        <div className="form-item">
          User name:
          <input type="text" ref={this.props.propRef} />
        </div>
        {!this.props.isInvalidName && (
          <span className="invalidMessage">Error: the name must contain at least 5 characters</span>
        )}
      </label>
    );
  }
}

export default UserName;
