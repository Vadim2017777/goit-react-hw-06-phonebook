import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../redux/Contact/contactActions';

import { CSSTransition } from 'react-transition-group';

import Header from './Header/Header';
import Body from './Body/Body';
import ContactListForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import fadeTransition from './transitions/fade.module.css';

class App extends Component {
  componentDidMount() {
    const localStoregeContacts = localStorage.getItem('contacts');
    console.log(localStoregeContacts);

    const { onAddToLS } = this.props;
    if (localStoregeContacts) {
      onAddToLS(JSON.parse(localStoregeContacts));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.props;
    if (contacts !== prevProps.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <>
        <Header />
        <Body>
          <ContactListForm />

          {/* {showContacts > 1 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )} */}

          {/* <CSSTransition
            in={showContacts > 0}
            timeout={250}
            classNames={fadeTransition}
            unmountOnExit
          > */}
          <Filter />
          <ContactList />

          {/* </CSSTransition> */}
        </Body>
      </>
    );
  }
}

const mDTP = { onAddToLS: actions.addToLocalStrg };
const mSTP = state => ({ contacts: state.contacts.items });

export default connect(mSTP, mDTP)(App);
