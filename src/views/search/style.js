import styled from "styled-components";
import { Button, Icon } from "antd";
export const BoxWrap = styled.div`
   height:54px;
   width:130px;
   margin-left: auto;
   margin-right: auto;
   margin-top:142px
   img{
    height:100%;
    width:100%;
   }

`
export const ButtonWrap = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:#f1f3f5;;
  width:288px;
  height:52px;
  margin-left: auto;
  margin-right: auto;
  border: none;
  border-radius: 0.25rem
  margin-top:30px
  p{
    margin: 0rem;
    padding: 0rem;
    font-size: inherit;
    font-size: 1.125rem;
    line-height: 3.25rem;
    vertical-align: middle;
    background: transparent;
    border: none;
    outline: none;
    color: #9b9b9b;

  }
`;

export const IconWrap = styled(Icon)`
font-size: 30px;
padding-top:14px;
color:#ccc;

`;

