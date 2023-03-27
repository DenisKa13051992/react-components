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
  userGenderMaleRef: React.RefObject<HTMLInputElement>;
  userGenderFemaleRef: React.RefObject<HTMLInputElement>;
  userUpdatesAgreeRef: React.RefObject<HTMLInputElement>;
  userCardsInfo: UserCardType[] | [];
  isInvalidName: boolean;
  isInvalidBirthDate: boolean;
  isInvalidUserFile: boolean;
  cleanForm: boolean;
  isInvalidGender: boolean;
  isInvalidAgree: boolean;
  isInvalidCountry: boolean;

  constructor(props: UserNameForm) {
    super(props);
    this.state = { value: '', isInvalidPass: true, showAddUserMessage: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.userNameRef = createRef<HTMLInputElement>();
    this.userBirthdateRef = createRef<HTMLInputElement>();
    this.userCountryRef = createRef<HTMLSelectElement>();
    this.userFileRef = createRef<HTMLInputElement>();
    this.userGenderMaleRef = createRef<HTMLInputElement>();
    this.userGenderFemaleRef = createRef<HTMLInputElement>();
    this.userUpdatesAgreeRef = createRef<HTMLInputElement>();
    this.userCardsInfo = [];
    this.isInvalidName = true;
    this.isInvalidBirthDate = true;
    this.isInvalidUserFile = true;
    this.cleanForm = false;
    this.isInvalidGender = true;
    this.isInvalidAgree = true;
    this.isInvalidCountry = true;
  }

  isValid(): void {
    this.isInvalidName = !this.userNameRef.current?.value?.length
      ? false
      : this.userNameRef.current?.value?.length < 5
      ? false
      : true;
    this.isInvalidBirthDate = this.userBirthdateRef.current?.value?.length === 0 ? false : true;
    this.isInvalidUserFile = this.userFileRef.current?.files?.length === 0 ? false : true;
    this.isInvalidGender =
      !this.userGenderMaleRef.current?.checked && !this.userGenderFemaleRef.current?.checked
        ? false
        : true;
    this.isInvalidAgree = !this.userUpdatesAgreeRef.current?.checked ? false : true;
    this.isInvalidCountry = this.userCountryRef.current?.value === 'none' ? false : true;
    if (this.isInvalidName && this.isInvalidBirthDate && this.isInvalidUserFile) {
      this.renderCarts();
    } else this.setState({ isInvalidPass: false });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.isValid();
  }

  renderCarts(): void {
    const userInfo: UserCardType = {
      userName: this.userNameRef.current?.value,
      userBirthdate: this.userBirthdateRef.current?.value,
      userCountry: this.userCountryRef.current?.value,
      userPhoto: this.userFileRef.current?.files?.[0],
      userAgree:
        this.userUpdatesAgreeRef.current?.checked === true
          ? 'I receive updates'
          : 'I do not receive updates',
      userGender: this.userGenderMaleRef.current?.checked === true ? 'Male' : 'Female',
    };
    this.userCardsInfo[this.userCardsInfo.length] = userInfo;
    this.resetForm();
    this.setState({ value: userInfo });
    this.showAddUserCardMessage();
  }

  async showAddUserCardMessage(): Promise<void> {
    await this.setState({ showAddUserMessage: true });
    setTimeout(() => this.setState({ showAddUserMessage: false }), 4000);
  }

  resetForm(): void {
    if (this.userNameRef.current) this.userNameRef.current.value = '';
    if (this.userBirthdateRef.current) this.userBirthdateRef.current.value = '';
    if (this.userCountryRef.current) this.userCountryRef.current.value = 'none';
    if (this.userUpdatesAgreeRef.current) this.userUpdatesAgreeRef.current.checked = false;
    if (this.userGenderMaleRef.current) this.userGenderMaleRef.current.checked = false;
    if (this.userGenderFemaleRef.current) this.userGenderFemaleRef.current.checked = false;
    if (this.userFileRef.current) this.userFileRef.current.value = '';
  }

  render() {
    return (
      <div className="userInfo-container">
        <form className="form-container" onSubmit={this.handleSubmit}>
          <UserName
            userName="User name"
            propRef={this.userNameRef}
            isInvalidName={this.isInvalidName}
          />
          <UserBirthDate
            userName="User name"
            propRef={this.userBirthdateRef}
            isInvalidBirthDate={this.isInvalidBirthDate}
          />
          <SelectCountry
            userName="User name"
            propRef={this.userCountryRef}
            isInvalidCountry={this.isInvalidCountry}
          />
          <UserUpdatesAgree
            userName="User name"
            propRef={this.userUpdatesAgreeRef}
            isInvalidAgree={this.isInvalidAgree}
          />
          <UserGender
            userName="User name"
            propMaleRef={this.userGenderMaleRef}
            propFemaleRef={this.userGenderFemaleRef}
            isInvalidGender={this.isInvalidGender}
          />
          <UserFileInput propRef={this.userFileRef} isInvalidUserFile={this.isInvalidUserFile} />
          <input type="submit" value="Отправить" />
        </form>
        <div className="user-card-addCard">
          {this.state.showAddUserMessage && (
            <span className="user-card-addCard-message">Success!</span>
          )}
        </div>
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
