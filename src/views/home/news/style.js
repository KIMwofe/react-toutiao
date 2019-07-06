import styled from "styled-components";
export const ContentWrap = styled.div`
  flex:1;
  overflow-y: auto;
`;
export const List = styled.a`
    display:block;
    padding:16px 0;
    margin:0 20px;
    border-bottom: 1px solid rgba(221, 221, 221, 0.6);
    display:flex;

    h3{
      font-size: 16px;
    line-height: 22px;
    margin-bottom:8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    }
    span{
    font-size: 9px;
    color: #999;
    white-space: nowrap;
    }
    img{
      width: 33.3%;
      padding-right: 2px;
    }
    .titleBox{
      width: 67%;
    }
    .imgBox{
      text-align:center;
    }
    .imgBox img{
      overflow: hidden;
      width: 80%;
      display: inline-block;
      vertical-align: middle;
      margin-left:19px;
    }
`