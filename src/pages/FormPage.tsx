import { Component, createRef, FormEvent, useState } from 'react';

import './FormPage.css';

// import UserName from '../components/forms/UserName';
// import { UserNameForm, UserCardType, StateTypeCard } from '../interfaces';
// import SelectCountry from '../components/forms/UserCountry';
// import UserBirthDate from '../components/forms/UserBirthdate';
// import UserUpdatesAgree from '../components/forms/UserUpdatesAgree';
// import UserGender from '../components/forms/UserGender';
// import UserFileInput from '../components/forms/UserFile';

// class FormsPage extends Component<UserNameForm, StateTypeCard> {
//   userNameRef: React.RefObject<HTMLInputElement>;
//   userBirthdateRef: React.RefObject<HTMLInputElement>;
//   userCountryRef: React.RefObject<HTMLSelectElement>;
//   userFileRef: React.RefObject<HTMLInputElement>;
//   userGenderMaleRef: React.RefObject<HTMLInputElement>;
//   userGenderFemaleRef: React.RefObject<HTMLInputElement>;
//   userUpdatesAgreeRef: React.RefObject<HTMLInputElement>;
//   userCardsInfo: UserCardType[] | [];
//   isInvalidName: boolean;
//   isInvalidBirthDate: boolean;
//   isInvalidUserFile: boolean;
//   cleanForm: boolean;
//   isInvalidGender: boolean;
//   isInvalidAgree: boolean;
//   isInvalidCountry: boolean;

//   constructor(props: UserNameForm) {
//     super(props);
//     this.state = { value: '', isInvalidPass: true, showAddUserMessage: false };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.userNameRef = createRef<HTMLInputElement>();
//     this.userBirthdateRef = createRef<HTMLInputElement>();
//     this.userCountryRef = createRef<HTMLSelectElement>();
//     this.userFileRef = createRef<HTMLInputElement>();
//     this.userGenderMaleRef = createRef<HTMLInputElement>();
//     this.userGenderFemaleRef = createRef<HTMLInputElement>();
//     this.userUpdatesAgreeRef = createRef<HTMLInputElement>();
//     this.userCardsInfo = [];
//     this.isInvalidName = true;
//     this.isInvalidBirthDate = true;
//     this.isInvalidUserFile = true;
//     this.cleanForm = false;
//     this.isInvalidGender = true;
//     this.isInvalidAgree = true;
//     this.isInvalidCountry = true;
//   }

//   handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();
//     this.isValid();
//   }

import React from 'react';
import { useForm } from 'react-hook-form';
import { country } from '../data';
import UserCard from '../components/forms/UserCard';
import { UserCardType } from '../interfaces';

type UserCardTypeState = {
  userCardsInfo?: UserCardType | UserCardType[];
  showAddUserMessage?: boolean;
};

function UserForm() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  const [cards, setCards] = useState([]);
  const onSubmit = (data: UserCardType) => {
    const userCardsInfo: UserCardType[] | undefined = [];
    console.log(userCardsInfo);
    const showAddUserMessage = false;
    userCardsInfo?.push(data);
    console.log(userCardsInfo);
    setCards(userCardsInfo);
    setTimeout(() => setCards(userCardsInfo), 4000);
    // showAddUserCardMessage(userCardsInfo);
    // renderCarts();
    console.log(getValues('userFirstName'));
    reset();
  };

  // const renderCarts = (): void => {
  //   const userInfo: UserCardType = {
  //     userName: getValues('userFirstName'),
  //     userBirthdate: getValues('userBirthdate'),
  //     userCountry: getValues('userCountry'),
  //     userPhoto: getValues('userPhoto'),
  //     userAgree: 'I receive updates',
  //     userGender: getValues('userGender'),
  //   };
  //   userCardsInfo[userCardsInfo.length] = userInfo;
  //   console.log(userCardsInfo);
  //   // setCards(userCardsInfo);
  //   showAddUserCardMessage();
  // };

  // const showAddUserCardMessage = async (userCardsInfo: UserCardType[]): Promise<void> => {
  //   await setCards(userCardsInfo);
  //   setTimeout(() => setCards(userCardsInfo), 4000);
  // };

  return (
    <div className="userInfo-container">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-item-label">
          <div className="form-item">
            User name:
            <input
              {...register('userFirstName', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Error: the name must contain at least 3 characters',
                },
              })}
            />
          </div>
          {errors.userFirstName && (
            <span className="invalidMessage">
              Error: the name must contain at least 3 characters
            </span>
          )}
        </label>
        <label className="form-item-label">
          <div className="form-item">
            Select birthdate:
            <input
              type="date"
              {...register('userBirthdate', {
                required: true,
              })}
              data-testid="date-picker"
            />
          </div>
          {errors?.userBirthdate && <span className="invalidMessage">Error: incorrect date</span>}
        </label>
        <label className="form-item-label">
          <div className="form-item">
            Select country:
            <select
              {...register('userCountry', {
                required: true,
                validate: (value) => value !== 'none',
              })}
              data-testid="country-picker"
            >
              {country.map((item: string) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {errors.userCountry && <span className="invalidMessage">Error: choose a country</span>}
        </label>
        <label className="form-item-label">
          <div className="form-item">
            <input
              type="checkbox"
              {...register('userAgree', {
                required: true,
              })}
            />
            I want to receive updates
          </div>
          {errors.userAgree && <span className="invalidMessage">Error: please agree</span>}
        </label>
        <label className="form-item-label">
          <div className="form-item">
            <div>
              <input
                type="radio"
                {...register('userGender', {
                  required: true,
                })}
                name="gender"
                data-testid="gender-picker-male"
              />
              Male
            </div>
            <div>
              <input
                type="radio"
                {...register('userGender', {
                  required: true,
                })}
                name="gender"
                data-testid="gender-picker-female"
              />
              Female
            </div>
          </div>
          {errors.userGender && <span className="invalidMessage">Error: choose your gender</span>}
        </label>
        <label className="form-item-user-photo-container">
          <div className="form-item-user-photo">
            Upload foto:
            <input
              type="file"
              {...register('userFoto', {
                required: true,
              })}
              data-testid="file-picker"
            />
          </div>
          {errors.userFoto && <span className="invalidMessage">Error: choose a photo</span>}
        </label>
        <input type="submit" value="Отправить" />
      </form>
      <div className="user-card-addCard">
        {cards && <span className="user-card-addCard-message">Success!</span>}
      </div>
      <div className="user-card-container">
        {userCardsInfo.map((item, index) => (
          <UserCard userCardInfo={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default UserForm;
