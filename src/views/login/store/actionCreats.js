import * as Types from './actionTypes';

export const onSignIn = value => ({
  type: Types.SIGN_IN,
  value
});

export const asyncSignIn = (values, props) => {
  return dispatch => {
    // 异步操作
    fetch('http://localhost:9090/user').then(res => {
      return res.json()
    }).then(res => {
      let rec = res[0];
      if (values.username === rec.username && values.password === rec.password) {
        dispatch(onSignIn(values));
        window.localStorage.setItem('user', JSON.stringify(rec));
        let redirect = props.location.state
          ? props.location.state.redirect
          : '/home';
        props.history.replace(redirect);
      }

    })
  };
};