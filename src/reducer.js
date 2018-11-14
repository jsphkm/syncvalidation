import * as actions from './actions';

const initialState = {
  loggedin: true,
  email: null,
  password: null
}

export const reducer = (state=initialState, action) => {
  if (action.type === actions.LOGGED_IN) {
    return Object.assign({}, state, {
      loggedin: action.loggedin,
      email: action.email,
      password: action.password
    })
  }
  return state;
}