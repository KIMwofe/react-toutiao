import React, { Component } from 'react'
import { Header, Homewrap, ContentWrap, NavWrap } from './style';
import { connect } from 'react-redux';
import { NavLink, HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as actions from './store/actionCreats';
import './styles/index.less';
import http from '../../server';
class home extends Component {

  render() {
    return (
      <Homewrap>
        <Header />
        <NavWrap>
          <div id="ulWrap">
            {
              this.props.navList.home.navList.map(item => {
                return (
                  <NavLink key={item.id} className="NavLink" to={item.url}>
                    {item.name}
                  </NavLink>
                )
              })
            }
          </div>
        </NavWrap>
        <ContentWrap>
          <Router>
            <Switch>
              <Route to="/" />
            </Switch>
          </Router>
        </ContentWrap>
      </Homewrap>
    )
  }
  async ajax() {
    const res = await http.get('/search/suggest/initial_page/')
    console.log(res.data)
  }
  componentDidMount() {
    this.props.getNavList();
    this.ajax();
    console.log(this.props)
  }
}

export default connect(
  (state) => ({
    navList: state
  }),
  (dispatch, props) => ({
    getNavList() {
      dispatch(actions.onNavList());
    }
  })
)(home)
