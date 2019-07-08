import styled from "styled-components";
import { Input, Button, Icon } from 'antd';

export const BoxWarp = styled.div`

  height: 44px;
  display: flex;
  align-items: center;
  width: 90%;
  background-color: #f1f3f5;
  margin-left: auto;
   margin-right: auto;
  border-radius: 3px;
  margin-top:10px;
`
export const IconWarp = styled(Icon)`
font-size:24px;
color:#ccc;
margin-left: 10px;
margin-top: 12px;
`
export const InputWarp = styled( Input)`
background: #f1f3f5;
    color: #222;
    font-size: 16px;
    padding: 0;
    outline: none;
    user-select: text;
    caret-color: #ff373c;
    border: none;
    margin-left: 8px;
    width:70%;
    border-right: 1px solid #ccc
`
export const ButtonWarp = styled(Button)`
    width: 50px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 16px;
    color: #707070;
    background-color: #f1f3f5;
    border: none;
`


