import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ContactListItem from '../ContactListItem/ContactListItem';

import styles from './ContactList.module.css';
import transition from '../ContactList/transitions/ContactLsTransition.module.css';

const ContactList = ({ contacts, onRemove }) => (
  <div className={styles.Contact_list}>
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

export default ContactList;

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
