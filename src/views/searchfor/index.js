
import React, { Component } from 'react';
import { BoxWarp, IconWarp, InputWarp, ButtonWarp } from './style';
import NewsList from './list';
// import { InputWarp } from './style';
import Inputlist from './inputlist';
export default class Searchfor extends Component {
  constructor(props){
    super(props);
    this.state = {
      msg:''
    }
}
  onBack = () => {
    this.props.history.replace('/search')
  }
  txtChanged = e => {
    this.setState({
      msg: e.target.value
    })

  }

  render() {
    // console.log(this.props)
    return (
      <React.Fragment>
        <BoxWarp>
          < IconWarp type="search">
          </ IconWarp>
          <InputWarp
            placeholder="请输入搜索内容"
            value={this.state.msg}
            onChange={e => this.txtChanged(e)}
        >
          </InputWarp>
          <ButtonWarp onClick={this.onBack}>取消</ButtonWarp>
        </BoxWarp >

        <NewsList />
        <Inputlist arr={this.state.msg}/>
      </React.Fragment>
    )
  }
}


