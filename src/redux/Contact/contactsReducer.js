import { combineReducers } from 'redux';
import action from './contactActionsTypes';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case action.ADD:
      return [...state, payload.items];

    case action.REMOVE:
      return state.filter(contact => contact.id !== payload.contactId);

    case action.ADD_TOLS:
      return [...state, ...payload.lStrgContct];

    default:
      return state;
  }
};

// const addToLocStrg = (state = [], { type, payload }) => {
//   switch (type) {
//     case action.ADD_TOLS:
//       return [...state, payload.lStrgContct];

//     default:
//       return state;
//   }
// };

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case action.CHANGE_FILTER:
      return payload.filter;

    default:
      return state;
  }
};

const theme = (state = 'light', { type, payload }) => {
  switch (type) {
    case action.CHANGE_THEME:
      return payload.value ? 'dark' : 'light';

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
  theme,
});

// addContacts = ({ name, number }) => {
//   let { contacts } = this.state;

//   contacts = {
//     id: uuidv4(),
//     name,
//     number,
//   };
//   const overlap = this.state.contacts.some(contacts => contacts.name === name);

//   if (!overlap) {
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, contacts],
//       };
//     });
//   } else alert(`${name} is already in contacts`);
// };

// removeContacts = id => {
//   this.setState(prevState => {
//     return {
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     };
//   });
// };

// changeFilter = filter => {
//   this.setState({ filter });
// };
