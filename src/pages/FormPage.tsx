import { useState } from 'react';
import './FormPage.css';
import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { country } from '../data';
import UserCard from '../components/forms/UserCard';
import { UserCardType } from '../interfaces';
import { useActions, useAppSelector } from '../hooks/redux';

function UserForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: '',
      userBirthdate: '',
      userCountry: 'none',
      userPhoto: '',
      userAgree: '',
      userGender: '',
    },
  });
  const { formCard } = useAppSelector((state) => state.formCard);
  const { formAdded } = useActions();
  const [userMessage, setUserMessage] = useState(false);
  const onSubmit = (data: FieldValues) => {
    const userInfo: UserCardType = {
      userName: data.userName,
      userBirthdate: data.userBirthdate,
      userCountry: data.userCountry,
      userPhoto: data.userPhoto ? URL.createObjectURL(data.userPhoto[0]) : '',
      userAgree: 'I receive updates',
      userGender: data.userGender,
    };
    setUserMessage(true);
    console.log(formCard);
    formAdded(userInfo);
    console.log(formCard);
    setTimeout(() => setUserMessage(false), 4000);
    reset();
  };

  return (
    <div className="userInfo-container">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-item-label">
          <div className="form-item">
            User name:
            <input
              {...register('userName', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Error: the name must contain at least 3 characters',
                },
              })}
            />
          </div>
          {errors.userName && (
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
                value="Male"
                {...register('userGender', {
                  required: true,
                })}
                name="userGender"
                data-testid="gender-picker-male"
              />
              Male
            </div>
            <div>
              <input
                type="radio"
                value="Female"
                {...register('userGender', {
                  required: true,
                })}
                name="userGender"
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
              className="button-file"
              {...register('userPhoto', {
                required: true,
              })}
              data-testid="file-picker"
            />
          </div>
          {errors.userPhoto && <span className="invalidMessage">Error: choose a photo</span>}
        </label>
        <input
          type="submit"
          className="button-submit"
          data-testid="submit-button"
          value="Отправить"
        />
      </form>
      <div className="user-card-addCard">
        {userMessage && <span className="user-card-addCard-message">Success!</span>}
      </div>
      <div className="user-card-container">
        {formCard.map((item, index) => (
          <UserCard userCardInfo={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default UserForm;
