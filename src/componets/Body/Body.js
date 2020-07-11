import React from 'react';

import whithTheme from '../../hoc/whithTeme';

import styles from './Body.module.css';

const Body = ({ theme, children }) => (
  <div
    className={styles.body}
    style={{ color: theme.config.fontColor, background: theme.config.bodybg }}
  >
    {children}
  </div>
);

export default whithTheme(Body);
