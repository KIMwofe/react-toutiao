import React, { Component } from 'react';
import http from '../../utils/http';
import './styles/content.less';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: '',
      title: '',
      avatar_url: '',
      source: '',
      comment_count: ''
    }
  }
  render() {
    return (
      <div>
        <div className="article__header">
          <p className="article__title">{this.state.title}</p>
          <div className="article__author">
            <div className="header-left">
              <div className="avatar">
                <img src={this.state.avatar_url} alt="" />
              </div>
              <span className="author-name">
                {this.state.source}
              </span>
            </div>
            <div className="header-right">
              <span>{this.state.comment_count} 评论</span>
            </div>
          </div>
        </div>

        <div className="article__content" id="article_content">
          <div dangerouslySetInnerHTML={{ __html: this.state.news }}>
          </div>
        </div>
      </div>


    )
  }
  ajax() {
    let num = this.props.location.search;
    let tag_id = num.slice(1);
    console.log(tag_id)
    http.get(`i${tag_id}/info/?i=${tag_id}`).then(res => {
      this.setState({
        news: res.data.data.content,
        title: res.data.data.title,
        avatar_url: res.data.data.media_user.avatar_url,
        source: res.data.data.source,
        comment_count: res.data.data.comment_count
      })
    })
  }
  componentDidMount() {
    this.ajax();
  }
}
