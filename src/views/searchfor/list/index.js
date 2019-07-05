import React, { Component } from 'react';
import { Boxp, ListWarp, RowWarp, ColWarp } from './style';
import http from '../../../server.js';
export default class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsItem: [],

    };
  }
  async ajax() {
    const res = await http.get('/search/suggest/initial_page/').then(res => { this.setState({ newsItem: res.data.data.suggest_word_list }); })
    console.log(res)
  }
  componentDidMount() {
    this.ajax();
  }
  render() {
    const newItem1 = this.state.newsItem.slice(0, 7);
    const newItem2 = this.state.newsItem.slice(7, 14)

    return (
      <React.Fragment>
        <Boxp>猜你想搜</Boxp>
        <RowWarp>
          <ColWarp span={12}>{
            newItem1.map(item => {
              return (
                <ListWarp key={item.id} className="NavLink" >
                  {item.word}
                </ListWarp>
              )
            })
          }</ColWarp>
          <ColWarp span={12}>{
            newItem2.map(item => {
              return (
                <ListWarp key={item.id} className="NavLink" >
                  {item.word}
                </ListWarp>
              )
            })
          }</ColWarp>
        </RowWarp>
      </React.Fragment>
    )
  }
}
