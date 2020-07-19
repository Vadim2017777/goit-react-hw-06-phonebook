import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import contactActions from '../../redux/Contact/contactActions';

import ContactListItem from '../ContactListItem/ContactListItem';

import s from './ContactList.module.css';
import transition from '../ContactList/transitions/ContactLsTransition.module.css';

const ContactList = ({ contacts, onRemove }) => (
  <div className={s.Contact_list}>
    <h2>Contacts</h2>
    <TransitionGroup component="ul">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={200} classNames={transition}>
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemove(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </div>
);

const mSTP = state => {
  const { items, filter } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleTasks = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return {
    contacts: visibleTasks,
  };
};

const mDTP = {
  onRemove: contactActions.removeContacts,
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
