import { createStore } from 'redux';
import { configureFlashMessages } from 'redux-flash-messages';
 
export const store = createStore(
  rootReducer,
);
 
configureFlashMessages({
  // The dispatch function for the Redux store. 
  dispatch: store.dispatch
});