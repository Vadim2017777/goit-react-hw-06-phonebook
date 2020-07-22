import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contactActions';

const onchangeTheme = (state, action) => (action.payload ? 'dark' : 'light');

const theme = createReducer('light', {
  [action.changeTheme]: onchangeTheme,
});

export default combineReducers({
  theme,
});
