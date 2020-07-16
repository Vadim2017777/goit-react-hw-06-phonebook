import { combineReducers } from 'redux';
import actionTypes from './contactActionsTypes';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload.items];

    default:
      return state;
  }
};

// const filter = (state = [], action) => {
//   // switch (action.ADD) {
//   //   case action.ADD:
//   //     return state.contacts.filter(contact => contact.id !== action.id);

//   //   default:
//   return state;
//   // }
// };

export default combineReducers({
  items,
  // filter,
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
