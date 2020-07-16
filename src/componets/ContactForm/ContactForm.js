import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/Contact/contactActions';

import { INITIAL_STATE_FORM } from '../../helpers/constants';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
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
      <div className={s.phoneBook_form}>
        <h2 className={s.phoneBook_item}>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label className={s.phoneBook_lb}>
            Name
            <input
              className={s.phoneBook_inp}
              type="text"
              value={name}
              name="name"
              onChange={this.handleInputChange}
            />
          </label>
          <label className={s.phoneBook_lb}>
            Number
            <input
              className={s.phoneBook_inp}
              type="tel"
              value={number}
              name="number"
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit" className={s.buttonPhonBk}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

const mDTP = { onAddContacts: actions.addContacts };
export default connect(null, mDTP)(ContactForm);

ContactForm.propTypes = {
  onRemove: PropTypes.func,
};
