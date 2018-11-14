import {reducer} from './reducer';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
export const store = createStore(
  combineReducers({
    main: reducer,
    form: formReducer
  })
);