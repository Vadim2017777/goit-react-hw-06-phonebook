import { v4 as uuidv4 } from 'uuid';
import actions from './contactActionsTypes';

const addContacts = ({ name, number }) => ({
  type: actions.ADD,
  payload: {
    items: { id: uuidv4(), name, number },
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

export default {
  addContacts,
  removeContacts,
  changeFilter,
};
