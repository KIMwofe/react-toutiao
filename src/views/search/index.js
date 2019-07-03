import React, { Component } from 'react';
import img1 from '../../images/img1.png';
import { ButtonWrap, IconWrap, BoxWrap } from './style';
// import withRouter from 'react-router-dom';


export default class Search extends Component {
  onChage = () => {
    this.props.history.replace('/searchfor')
  }
  render() {
    return (
      <div>
        <BoxWrap className="Box">
          <img src={img1} alt=""/>
        </BoxWrap>
        < ButtonWrap onClick={this.onChage}>
          <p>搜你想搜的</p>
          <IconWrap type="search"></IconWrap>
        </ ButtonWrap>
      </div>
    )
  }
}

