import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { INITIAL_STATE_FORM } from '../../helpers/constants';

import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    ...INITIAL_STATE_FORM,
  };

  handleInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { onAddContacts } = this.props;
    e.preventDefault();
    onAddContacts({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE_FORM });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={styles.phoneBook_form}>
        <h2 className={styles.phoneBook_item}>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label className={styles.phoneBook_lb}>
            Name
            <input
              className={styles.phoneBook_inp}
              type="text"
              value={name}
              name="name"
              onChange={this.handleInputChange}
            />
          </label>
          <label className={styles.phoneBook_lb}>
            Number
            <input
              className={styles.phoneBook_inp}
              type="tel"
              value={number}
              name="number"
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" className={styles.buttonPhonBk}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onRemove: PropTypes.func,
};
