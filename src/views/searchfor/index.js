
import React, { Component } from 'react';
import { BoxWarp, IconWarp, InputWarp, ButtonWarp } from './style';
import NewsList from './list';


export default class Searchfor extends Component {
  onBack = () => {
    this.props.history.replace('/search')
  }

  render() {
    return (
      <React.Fragment>
        <BoxWarp>
          < IconWarp type="search"></ IconWarp>
          <InputWarp placeholder="请输入搜索内容" />
          <ButtonWarp onClick={this.onBack}>取消</ButtonWarp>
        </BoxWarp>
        <NewsList>

        </NewsList>
      </React.Fragment>
    )
  }
}

