import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import action from './contactActions';

const addContacts = (state, action) => [...state, action.payload.items];

const removeContacts = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const addToLocalStrg = (state, action) => [...action.payload];

const onFilter = (state, action) => action.payload;

const onchangeTheme = (state, action) => (action.payload ? 'dark' : 'light');

const items = createReducer([], {
  [action.addContacts]: addContacts,
  [action.removeContacts]: removeContacts,
  [action.addToLocalStrg]: addToLocalStrg,
});

const filter = createReducer('', {
  [action.changeFilter]: onFilter,
});

const theme = createReducer('light', {
  [action.changeTheme]: onchangeTheme,
});

export default combineReducers({
  items,
  filter,
  theme,
});
