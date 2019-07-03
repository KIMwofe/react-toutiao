import * as Types from './actionTypes'

const initState = {
  navList: [
    { id: 1, name: '推荐', url: "/rec", component: "Rec" },
    { id: 2, name: '娱乐', url: '/recration', component: "Recration" },
    { id: 3, name: '科技', url: '/recration', component: "Recration" },
    { id: 4, name: '汽车', url: '/recration', component: "Recration" },
    { id: 5, name: '体育', url: '/recration', component: "Recration" },
    { id: 6, name: '财经', url: '/recration', component: "Recration" },
    { id: 7, name: '军事', url: '/recration', component: "Recration" },
    { id: 8, name: '国际', url: '/recration', component: "Recration" },
    { id: 9, name: '时尚', url: '/recration', component: "Recration" }
  ]
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === Types.SET_NAVLIST) {
    console.log(newState)
    return newState;
  }

  return newState;
}

