import React from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/Contact/contactActions';

import styleConxt from '../../contex/ThemeContext';

import styles from './Header.module.css';
const dark = 'dark';

const Header = ({ theme, toggleTheme }) => (
  <header
    style={{
      background: styleConxt.dark.headerBg,
      color: styleConxt.dark.fontColor,
    }}
  >
    <div className={styles.theme_selector}>
      <span className={styles.label}>
        Toggle theme: {''}
        {dark}
      </span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          onChange={event => toggleTheme(event.currentTarget.checked)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </header>
);

const mDTP = { toggleTheme: actions.changeTheme };
const mSTP = state => ({ theme: state.contacts.theme });

export default connect(mSTP, mDTP)(Header);
