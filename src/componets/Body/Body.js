import React from 'react';

import { connect } from 'react-redux';

import styleConxt from '../../contex/ThemeContext';

import s from './BodyStyle.module.css';

const Body = ({ theme, children }) => (
  <div
    className={s.body}
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
