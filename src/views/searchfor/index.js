
import React, { Component } from 'react';
import { BoxWarp, IconWarp, InputWarp, ButtonWarp } from './style';
import NewsList from './list';
import Inputlist from './inputlist/index';

export default class Searchfor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
    display:'block'
    }
  }
  onBack = () => {
    this.props.history.replace('/search')
  }
  txtChanged = e => {
    this.setState({
      msg: e.target.value
    })
    this.setState({ display: !this.state.display })
    if (this.state.msg !== null) {
      this.setState({
        display: 'none',
      })
    } else {
      this.setState({
        display:'block'
      })
    }
  }
  render() {

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
        <div style={{ display:this.state.display }} ><NewsList /></div>
        <div>
          <Inputlist arr={this.state.msg}>
          </Inputlist>
        </div>
      </React.Fragment>
    )
              }
            }


