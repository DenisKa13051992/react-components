import { UserFileForm } from '../../interfaces';
import React, { Component } from 'react';

class UserFileInput extends Component<UserFileForm> {
  constructor(props: UserFileForm) {
    super(props);
    this.state = { value: '', isInvalid: props.isInvalidUserFile };
  }

  render() {
    return (
      <label className="form-item-user-photo-container">
        <div className="form-item-user-photo">
          Upload foto:
          <input type="file" ref={this.props.propRef} data-testid="file-picker" />
        </div>
        {!this.props.isInvalidUserFile && (
          <span className="invalidMessage">Error: choose a photo</span>
        )}
      </label>
    );
  }
}

export default UserFileInput;
