import React, { Component, createRef, FormEvent } from 'react';

import './FormPage.css';

import UserName from '../components/forms/UserName';
import { UserNameForm, UserCardType, StateTypeCard } from '../interfaces';
import SelectCountry from '../components/forms/UserCountry';
import UserBirthDate from '../components/forms/UserBirthdate';
import UserUpdatesAgree from '../components/forms/UserUpdatesAgree';
import UserGender from '../components/forms/UserGender';
import UserFileInput from '../components/forms/UserFile';
import UserCard from '../components/forms/UserCard';

class FormsPage extends Component<UserNameForm, StateTypeCard> {
  userNameRef: React.RefObject<HTMLInputElement>;
  userBirthdateRef: React.RefObject<HTMLInputElement>;
  userCountryRef: React.RefObject<HTMLSelectElement>;
  userFileRef: React.RefObject<HTMLInputElement>;
  userGenderRef: React.RefObject<HTMLInputElement>;
  userUpdatesAgreeRef: React.RefObject<HTMLInputElement>;
  userCardsInfo: UserCardType[] | [];

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
    this.userCardsInfo = [];
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const userInfo: UserCardType = {
      userName: this.userNameRef.current?.value,
      userBirthdate: this.userBirthdateRef.current?.value,
      userCountry: this.userCountryRef.current?.value,
      userPhoto: this.userFileRef.current?.files?.[0],
      userAgree:
        this.userUpdatesAgreeRef.current?.checked === true
          ? 'I receive updates'
          : 'I do not receive updates',
      userGender: this.userGenderRef.current?.checked === true ? 'Male' : 'Female',
    };
    this.userCardsInfo[this.userCardsInfo.length] = userInfo;
    console.log(this.userGenderRef);
    this.setState({ value: userInfo });
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
        <div className="user-card-container">
          {this.userCardsInfo.map((item, index) => (
            <UserCard userCardInfo={item} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormsPage;
