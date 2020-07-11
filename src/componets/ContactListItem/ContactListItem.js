import React from 'react';
import PropTypes from 'prop-types';

import whithTheme from '../../hoc/whithTeme';

import styles from './ContactListItem.module.css';

const TaskListItem = ({ theme, name, number, onRemove }) => (
  <li className={styles.list_PhoneLs}>
    <p
      style={{
        color: theme.config.fontColor,
        background: theme.config.bodybg,
      }}
    >
      {name}:{number}
    </p>

    <button type="button" className={styles.buttonPhoneLs} onClick={onRemove}>
      Delete
    </button>
  </li>
);

export default whithTheme(TaskListItem);

TaskListItem.defaultProps = {
  contacts: [],
};

TaskListItem.propTypes = {
  onRemove: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
