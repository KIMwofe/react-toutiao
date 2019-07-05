import React, { Component } from 'react'
import { Header, Homewrap, ContentWrap, NavWrap, TitleWrap } from './style';
import { connect } from 'react-redux';
import { NavLink, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AuthRoute from '../../utils/Auth';
import { Icon } from 'antd'
import * as actions from './store/actionCreats';
import './styles/index.less';
import http from '../../server';
import Recration from './news/recration';
import Science from './news/Science';
import Pe from './news/Pe';
import finance from './news/finance';
import Military from './news/military'
import International from './news/international';
import Finshow from './news/finshow'


let isLoding = false;
class home extends Component {

  render() {
    return (
      <Homewrap>
        <Header>
          <Icon type="mail" style={{ color: '#fff', height: '50px', width: '72px', fontSize: '20px', lineHeight: '50px' }} />
          <TitleWrap />
          <NavLink to="/search">
            <Icon type="search" style={{ color: '#fff', height: '50px', width: '72px', fontSize: '20px', lineHeight: '50px' }} />
          </NavLink>
        </Header>
        <NavWrap>
          <div id="ulWrap">
            {
              this.props.navList.home.navList.map((item, index) => {
                return (
                  <NavLink key={item.id} to={item.url} className="NavLink" >
                    {item.name}
                  </NavLink>
                )
              })
            }
          </div>
        </NavWrap>
        <Router>
          <Switch>
            <Route path='/Recration' component={Recration} />
            <Route path='/Science' component={Science} />
            <Route path='/Pe' component={Pe} />
            <Route path='/finance' component={finance} />
            <Route path='/military' component={Military} />
            <Route path='/international' component={International} />
            <Route path='/finshow' component={Finshow} />
            <AuthRoute path='/' component={Index} />
            <Redirect to="/home" />
          </Switch>
        </Router>
      </Homewrap>
    )
  }

}
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: []
    }
  }
  render() {
    return (
      <ContentWrap onScroll={this.handleScroll.bind(this)}>
        <ul>
          {
            this.state.newsList.map((item, index) => {
              return (
                <li key={index}>
                  <div id="imgBox" className={item.image_url ? 'titleBox' : ''}>
                    <h3>{item.title}</h3>
                    {
                      item.image_list.length ? item.image_list.map((imgUrl, index) => {
                        return (
                          <img src={imgUrl.url} alt="" key={index} />
                        )
                      }) : ' '
                    }
                    <div>
                      {item.label ?
                        <span style={{
                          width: '29px',
                          fontSize: '11px',
                          marginRight: '10px',
                          color: '#f85959',
                          borderColor: 'rgba(248,89,89,0.5)',
                          display: 'inline-block',
                          textAlign: 'center',
                          border: '1px solid rgba(248,89,89,0.5)',
                          lineHeight: '12px',
                          borderRadius: '4px'
                        }}> {item.label} </span>
                        : ''}
                      <span > {item.media_name} </span>
                      <span> 评论 {item.comment_count} </span>
                      <span> 评论 {item.comment_count} </span>
                    </div>
                  </div>
                  {
                    item.image_url ? <div className="imgBox">
                      <img src={item.image_url} alt="" />
                    </div> : ''
                  }
                </li>
              )
            })
          }
        </ul>
      </ContentWrap>
    )
  }
  async ajax() {
    const res = await http.get(`list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1D57DC19D0B57C&cp=5D1D0B2567BCAE1&min_behot_time=0&_signature=d5q7gwAAKol-1sGW5iBeC3eau5&i=`
    )
    this.setState({
      newsList: res.data.data
    })
  }
  getNewList() {
    isLoding = true;
    setTimeout(() => {
      http.get(`/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1B57D511D2DFED&cp=5D1D3DEFCE7DFE1&max_behot_time=1562228091&_signature=YAZoOwAAPR9pShIuq75hwWAGaC&i=1562228091`
      ).then(res => {
        // console.log(res.data)
        // let arr = this.state.newsList;
        let newsList = [...this.state.newsList]
        res.data.data.map(item => {
          newsList.push(item);
        })
        isLoding = false;
        this.setState({
          newsList: newsList
        })
      })
    }, 300);

  }
  handleScroll() {
    let scrollTop = document.getElementsByClassName('sc-ifAKCX')[0].scrollTop // 滚动条距离顶部的距离
    let scrollHeight = document.getElementsByClassName('sc-ifAKCX')[0].scrollHeight // 页面的高度
    let clientHeight = document.getElementsByClassName('sc-ifAKCX')[0].clientHeight // 可视区域的高
    if ((scrollHeight - clientHeight) - scrollTop < 10) {
      if (!isLoding) {
        this.getNewList();
      }
    }
  }
  handelupNewList(props) {

  }
  componentDidMount() {
    this.getNewList();
    this.ajax();
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
