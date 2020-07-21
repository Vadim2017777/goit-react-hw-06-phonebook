import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './Contact/contactsReducer';

const store = configureStore({ reducer: { contacts: contactsReducer } });

export default store;
