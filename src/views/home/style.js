import styled from "styled-components";

export const Homewrap = styled.div`
  display: -webkit-flex;
  flex-direction:column;
  height: 100%;
`;
export const TitleWrap = styled.div`
    width:88px;
    height:100% ;
    background:url('https://s3b.pstatp.com/growth/mobile_list/image/wap_logo@3x_581de69e.png') no-repeat  center;
    background-size:42%;
    flex:1;
`;


export const Header = styled.div`
  width:100%;
  height:48px;
  color:#000;
  background:#d43d3d;
  position:relative;
  display:flex;
  justify-content:space-between;

`;
export const NavWrap = styled.div`
  height:38px;
  /* width:100%; */
  background:#f4f5f6;

`;
export const ContentWrap = styled.div`
  flex:1;
  overflow-y: auto;
  ul li {
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
      margin-right: 6px;
      line-height: 24px;
      font-size: 11px;
      color: #999;
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
  }
`;