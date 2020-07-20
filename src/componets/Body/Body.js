import React from 'react';

import { connect } from 'react-redux';

import actions from '../../redux/Contact/contactActions';

import styleConxt from '../../contex/ThemeContext';

import styles from './Body.module.css';

const Body = ({ theme, children }) => (
  <div
    className={styles.body}
    style={{
      color: styleConxt[theme].fontColor,
      background: styleConxt[theme].bodybg,
    }}
  >
    {children}
  </div>
);

const mSTP = state => ({ theme: state.contacts.theme });

export default connect(mSTP, null)(Body);
