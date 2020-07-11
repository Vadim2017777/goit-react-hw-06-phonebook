import React from 'react';

import whithTheme from '../../hoc/whithTeme';

import styles from './Header.module.css';

const Header = ({ theme, toggleTheme }) => (
  <header
    style={{
      background: theme.config.headerBg,
      color: theme.config.fontColor,
    }}
  >
    <div className={styles.theme_selector}>
      <span className={styles.label}>
        Toggle theme: {''}
        {theme.type}
      </span>
      <label className={styles.switch}>
        <input
          type="checkbox"
          checked={theme.type === 'light'}
          onChange={event => toggleTheme(event.currentTarget.value)}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  </header>
);

export default whithTheme(Header);
