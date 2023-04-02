import React from 'react';
import { useForm } from 'react-hook-form';
import { country } from '../../data';


function UserForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data));
    reset();
  };

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
        {/* {this.state.showAddUserMessage && (
          <span className="user-card-addCard-message">Success!</span>
        )} */}
      </div>
      <div className="user-card-container">
        {/* {this.userCardsInfo.map((item, index) => (
          <UserCard userCardInfo={item} key={index} />
        ))} */}
      </div>
    </div>
  );
}

export default UserForm;
