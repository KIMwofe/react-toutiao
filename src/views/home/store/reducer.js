import * as Types from './actionTypes'

const initState = {
  navList: [
    { id: 1, name: '推荐', url: "/home", component: "home" },
    { id: 2, name: '娱乐', url: '/Recration', component: "Recration" },
    { id: 3, name: '科技', url: '/Science', component: "Science" },
    { id: 4, name: '体育', url: '/Pe', component: "Pe" },
    { id: 5, name: '财经', url: '/finance', component: "finance" },
    { id: 6, name: '军事', url: '/military', component: "military" },
    { id: 7, name: '国际', url: '/international', component: "international" },
    { id: 8, name: '时尚', url: '/finshow', component: "finshow" }
  ]
};

export default (state = initState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  if (action.type === Types.SET_NAVLIST) {
    return newState;
  }

  return newState;
}

