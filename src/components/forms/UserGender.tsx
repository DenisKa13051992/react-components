import { StateType, UserNameForm } from '../../interfaces';
import React, { Component } from 'react';

class UserGender extends Component<UserNameForm, StateType> {
  constructor(props: UserNameForm) {
    super(props);
  }

  render() {
    return (
      <label className="form-item">
        <div>
          <input type="radio" name="gender" defaultChecked ref={this.props.propRef} />
          Male
        </div>
        <div>
          <input type="radio" name="gender" />
          Female
        </div>
      </label>
    );
  }
}

export default UserGender;
