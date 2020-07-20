import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Header from './Header/Header';
import Body from './Body/Body';
import ContactListForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import fadeTransition from './transitions/fade.module.css';

class App extends Component {
  // componentDidMount() {
  //   const localStoregeContacts = localStorage.getItem('contacts');

  //   if (localStoregeContacts) {
  //     this.setState({
  //       contacts: JSON.parse(localStoregeContacts),
  //     });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   }
  // }

  toggleTheme = () => {
    const { theme } = this.state;
    this.setState({
      theme: theme === 'dark' ? 'light' : 'dark',
    });
  };

  render() {
    return (
      /* // <ThemeContext.Provider */
      //   value={{
      //     type: theme,
      //     config: themeConfig[theme],
      //   }}
      // >
      <>
        <Header />
        <Body>
          <ContactListForm />
          <Filter />
          {/* {showContacts > 1 && (
            <Filter value={filter} onChange={this.changeFilter} />
          )} */}

          {/* <CSSTransition
            in={showContacts > 0}
            timeout={250}
            classNames={fadeTransition}
            unmountOnExit
          > */}
          <ContactList />
          {/* </CSSTransition> */}
        </Body>
      </>
      // </ThemeContext.Provider>
    );
  }
}

export default App;
