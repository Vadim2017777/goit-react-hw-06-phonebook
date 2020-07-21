import { v4 as uuidv4 } from 'uuid';
import actions from './contactActionsTypes';

const addContacts = ({ name, number }) => ({
  type: actions.ADD,
  payload: {
    items: { id: uuidv4(), name, number },
  },
});

const addToLocalStrg = lStrgContct => ({
  type: actions.ADD_TOLS,
  payload: {
    lStrgContct,
  },
});

const removeContacts = contactId => ({
  type: actions.REMOVE,
  payload: {
    contactId,
  },
});

const changeFilter = filter => ({
  type: actions.CHANGE_FILTER,
  payload: {
    filter,
  },
});

const changeTheme = value => ({
  type: actions.CHANGE_THEME,
  payload: {
    value,
  },
});

export default {
  addContacts,
  removeContacts,
  changeFilter,
  changeTheme,
  addToLocalStrg,
};
