import React, { Component } from 'react'
import { ContentWrap, List } from '../style'
import http from '../../../utils/http';

let isLoding = false;
export default class Recration extends Component {
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
                <List key={index} href={`/#/content/?${item.tag_id}`}>
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
                </List>
              )
            })
          }
        </ul>
      </ContentWrap>
    )
  }
  async ajax() {
    const res = await http.get(`list/?tag=news_entertainment&ac=wap&count=20&format=json_raw&as=A1358DA17EDA788&cp=5D1EFA677828EE1&min_behot_time=0&_signature=QbwVlAAAHKRI8G-Bv2hjC0G8FY&i=`
    )
    this.setState({
      newsList: res.data.data
    })
  }
  getNewList() {
    isLoding = true;
    setTimeout(() => {
      http.get(`list/?tag=news_entertainment&ac=wap&count=20&format=json_raw&as=A185AD611E1AD16&cp=5D1E5A3D11267E1&max_behot_time=1562288987&_signature=QbwVlAAAHKRI8G-Bv2iQBEG8FY&i=1562288987`
      ).then(res => {
        // console.log(res.data)
        // let arr = this.state.newsList;
        let newsList = [...this.state.newsList]
        res.data.data.map(item => {
          return newsList.push(item);
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
