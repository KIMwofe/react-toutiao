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
      }

      // window.localStorage.setItem('user', JSON.stringify(res.data));

      // // 跳转页面
      // let redirect = props.location.state
      //   ? props.location.state.redirect
      //   : '/';
      // props.history.replace(redirect);
    })
    // http
    //   .post('/sign-in', JSON.stringify(values), {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(res => {
    //     // 这里就不需要判断是否 code
    //     dispatch(onSignIn(res.data));
    //     window.localStorage.setItem('user', JSON.stringify(res.data));

    //     // 跳转页面
    //     let redirect = props.location.state
    //       ? props.location.state.redirect
    //       : '/';
    //     props.history.replace(redirect);
    //   });
  };
};