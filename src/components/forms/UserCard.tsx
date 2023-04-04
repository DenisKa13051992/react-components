import { UserCardTypeWithKey, StateType, UserCardType } from '../../interfaces';
import React, { Component } from 'react';

class UserCard extends Component<UserCardTypeWithKey, StateType> {
  constructor(props: UserCardTypeWithKey) {
    super(props);
    this.state = { isActive: false };
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  handleClickShow() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const userCard: UserCardType = this.props.userCardInfo;
    return (
      <div className="card-item">
        <div className="card-item-img-div">
          <img className="card-item-img" src={userCard.userPhoto} alt="" />
        </div>
        <ul className="card-item-list-group">
          <li className="list-group-card-item">
            <small>
              Name: <span className="card-user-name">{userCard.userName}</span>
            </small>
          </li>
          <li className="list-group-card-item">
            <small>
              Birthdate: <span className="card-user-birthdate">{userCard.userBirthdate}</span>
            </small>
          </li>
          <li className="list-group-card-item">
            <small>
              Country: <span className="card-user-country">{userCard.userCountry}</span>
            </small>
          </li>
          <li className="list-group-card-item">
            <small>
              Gender: <span className="card-user-gender">{userCard.userGender}</span>
            </small>
          </li>
          <li className="list-group-card-item">
            <span className="card-user-agree">{userCard.userAgree}</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default UserCard;
