import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import action from '../../redux/Contact/contactActions';

import styleConxt from '../../contex/ThemeContext';

import s from './ContactListItem.module.css';

const TaskListItem = ({ theme, name, number, onRemove = () => null }) => (
  <li
    className={s.list_PhoneLs}
    style={{
      color: styleConxt[theme].fontColor,
      background: styleConxt[theme].bodybg,
    }}
  >
    <p>
      {name}:{number}
    </p>

    <button type="button" className={s.buttonPhoneLs} onClick={onRemove}>
      Delete
    </button>
  </li>
);

const mSTP = (state, ownProps) => {
  const item = state.contacts.items.find(item => item.id === ownProps.id);
  const theme = state.contacts.theme;

  return { theme, ...item };
};

const mDTP = (dispatch, ownProps) => ({
  onRemove: () => dispatch(action.removeContacts(ownProps.id)),
});

export default connect(mSTP, mDTP)(TaskListItem);

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
