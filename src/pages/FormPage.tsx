import React, { Component, createRef, FormEvent } from 'react';

import './FormPage.css';

import UserName from '../components/forms/UserName';
import { StateType, UserNameForm } from 'interfaces';
import SelectCountry from '../components/forms/UserCountry';
import UserBirthDate from '../components/forms/UserBirthdate';
import UserUpdatesAgree from '../components/forms/UserUpdatesAgree';
import UserGender from '../components/forms/UserGender';
import UserFileInput from '../components/forms/UserFile';

class FormsPage extends Component<UserNameForm, StateType> {
  userNameRef: React.RefObject<HTMLInputElement>;
  userBirthdateRef: React.RefObject<HTMLInputElement>;
  userCountryRef: React.RefObject<HTMLSelectElement>;
  userFileRef: React.RefObject<HTMLInputElement>;
  userGenderRef: React.RefObject<HTMLInputElement>;
  userUpdatesAgreeRef: React.RefObject<HTMLInputElement>;

  constructor(props: UserNameForm) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userNameRef = createRef<HTMLInputElement>();
    this.userBirthdateRef = createRef<HTMLInputElement>();
    this.userCountryRef = createRef<HTMLSelectElement>();
    this.userFileRef = createRef<HTMLInputElement>();
    this.userGenderRef = createRef<HTMLInputElement>();
    this.userUpdatesAgreeRef = createRef<HTMLInputElement>();
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    alert('Отправленное имя: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="userInfo-container">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <UserName userName="User name" propRef={this.userNameRef} />
          <UserBirthDate userName="User name" propRef={this.userBirthdateRef} />
          <SelectCountry userName="User name" propRef={this.userCountryRef} />
          <UserUpdatesAgree userName="User name" propRef={this.userUpdatesAgreeRef} />
          <UserGender userName="User name" propRef={this.userGenderRef} />
          <UserFileInput propRef={this.userFileRef} />
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

export default FormsPage;
