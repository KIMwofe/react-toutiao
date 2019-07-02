import * as Types from './actionTypes'

const initState = {
  navList: [
    { id: 1, name: '推荐' },
    { id: 2, name: '娱乐' },
    { id: 3, name: '科技' },
    { id: 4, name: '汽车' },
    { id: 5, name: '体育' },
    { id: 6, name: '财经' },
    { id: 7, name: '军事' },
    { id: 8, name: '国际' },
    { id: 9, name: '时尚' }
  ]
};

export default (state = initState, action) {
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === Types.SET_NAVLIST) {
    return newState.navList;
  }
  return newState;
}

