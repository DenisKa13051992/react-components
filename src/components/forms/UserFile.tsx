import { UserFileForm } from '../../interfaces';
import React, { Component } from 'react';

class UserFileInput extends Component<UserFileForm> {
  constructor(props: UserFileForm) {
    super(props);
  }

  render() {
    return (
      <label className="form-item-user-photo">
        Upload foto:
        <input type="file" ref={this.props.propRef} />
      </label>
    );
  }
}

export default UserFileInput;
