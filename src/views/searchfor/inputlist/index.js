import React, { Component } from 'react';
import http from '../../../server.js';

export default class Inputlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      inputVal: '',
      url: '/2/article/search_sug/?keyword=',

    };
  }
  async ajax() {
    console.log(this.props)
    const newStr = this.state.url;
    const newUrl = this.state.inputVal
    var url = newStr.slice(0,31) + newUrl
    http.get(url).then(res => { this.setState({ news: res.data.data }); })
  }
  componentDidMount() {
    this.ajax();
  }
  render() {
    const {news} = this.state
    return (
      <div>{
        news.map(item => {
              return (
                <li key={item.info.wordid} className="NavLink" >
                  {item.keyword}
                </li>
              )
        })
      }
     </div>
    )
  }
}
