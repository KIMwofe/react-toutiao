import React, { Component } from 'react';
import http from '../../../server.js';
import { BoxWarp, IconWrap, ListWarp } from './style';

export default class Inputlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      inputVal: '',
      url: '/2/article/search_sug/?keyword=',

    };
  }

  render() {
    // console.log(this.props)
    const { news } = this.state
    return (
      <div>{
        news.map(item => {
          return (

            <BoxWarp key={item.info.wordid}>
              < ListWarp className="NavLink" >
                <IconWrap type="search" />
                {item.keyword}
              </ListWarp>
              </BoxWarp>

          )
        })
      }
      </div>
    )
  }
  async ajax() {
    const newStr = this.state.url;
    const newUrl = this.state.inputVal
    var url = newStr.slice(0, 31) + newUrl
    http.get(url).then(res => { this.setState({ news: res.data.data }); })
  }
  componentDidUpdate(prevProps, nextProps) {
    //典型用法（不要忘记比较props
    if (this.props.arr !== prevProps.arr) {
      this.setState({
        inputVal: this.props.arr
      });
      this.ajax();
    }
    if (this.props.arr == null) {
      this.setState({
        news:[]
      })
    }
  }
}

