import { createStore, combineReducers } from 'redux';

import contactsReducer from './Contact/contactsReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
