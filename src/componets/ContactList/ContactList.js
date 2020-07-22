import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import actions from '../../redux/Contact/contactActions';

import ContactListItem from '../ContactListItem/ContactListItem';

import styleConxt from '../../contex/ThemeContext';

import s from './ContactList.module.css';
import transition from '../ContactList/transitions/ContactLsTransition.module.css';

const ContactList = ({ contacts, theme }) => (
  <div
    className={s.Contact_list}
    style={{
      color: styleConxt[theme].fontColor,
      background: styleConxt[theme].bodybg,
    }}
  >
    <h2>Contacts</h2>
    <TransitionGroup component="ul">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={200} classNames={transition}>
          <ContactListItem key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

const mSTP = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();
  const theme = state.contacts.theme;
  const visibleTasks = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleTasks,
    theme,
  };
};

const mDTP = {
  onRemove: actions.removeContacts,
};

export default connect(mSTP, mDTP)(ContactList);

ContactList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.node,
    }),
  ).isRequired,
};
