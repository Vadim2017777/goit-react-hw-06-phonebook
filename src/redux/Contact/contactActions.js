import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContacts = createAction('contact/addContacts', ({ name, number }) => ({
  payload: { items: { id: uuidv4(), name, number } },
}));

const addToLocalStrg = createAction('contact/addToLocalStorage');

const removeContacts = createAction('contact/removeContacts');

const changeFilter = createAction('contact/changeFilter');

const changeTheme = createAction('contact/changeTheme');

export default {
  addContacts,
  removeContacts,
  changeFilter,
  changeTheme,
  addToLocalStrg,
};
