import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styleConxt from '../../contex/ThemeContext';
import s from './ContactListItem.module.css';

const TaskListItem = ({ theme, name, number, onRemove }) => (
  <li className={s.list_PhoneLs}>
    <p
      style={{
        color: styleConxt[theme].fontColor,
        background: styleConxt[theme].bodybg,
      }}
    >
      {name}:{number}
    </p>

    <button type="button" className={s.buttonPhoneLs} onClick={onRemove}>
      Delete
    </button>
  </li>
);

const mSTP = state => ({ theme: state.contacts.theme });
export default connect(mSTP, null)(TaskListItem);

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
