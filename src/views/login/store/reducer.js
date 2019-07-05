import * as Types from './actionTypes';

const initState = window.localStorage.getItem('user')
  ? JSON.parse(window.localStorage.getItem('user'))
  : {
    username: ''
  };

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === Types.SIGN_IN) {
    console.log(action.value);
    newState.username = action.value.username;
  }

  return newState;
};