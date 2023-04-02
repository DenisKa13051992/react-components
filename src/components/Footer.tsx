import React, { Component } from 'react';

import './Footer.css';
import githubIcon from '../assets/githubIcon.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <ul className="footer-list">
          <li className="footer-item">
            <a className="footer-github-link" href="https://github.com/DenisKa13051992">
              <img className="footer-github-img" src={githubIcon} alt="github-link" />
              <br />
              Denis Karnachenko 2023
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-rss-link" href="https://wearecommunity.io/events/rs-react-2023q1">
              <img
                className="footer-rss-img"
                src="https://sonejka.github.io/rs-kittens/dist/images/partners/logo-rs.svg"
                alt="rsschool-link"
              />
              <br />
              ©RSSchool React 2023Q1
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
