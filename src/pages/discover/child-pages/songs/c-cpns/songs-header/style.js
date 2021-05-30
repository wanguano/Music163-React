import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 6px;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .title {
    font-size: 24px;
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }

  .select {
    position: relative;
    top: 2px;
    width: 91px;
    height: 31px;
    line-height: 31px;
    background-color: #fafafa;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    color: #0c73c2;
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    } 

    i {
      position: relative;
      left: 5px;
      bottom: 2px;
      display: inline-block;
      width: 8px;
      height: 5px;
      background-position: -70px -543px;
    }
  }

  .show {
    /* display: block !important; */
  }

  .category {
    display: block;
    .cover {
      position: fixed;
      left: 0;
      right: 0;
      top: 105px;
      bottom: 0;
      background-color: rgba(0,0,0,.05);
    }
  }
`

export const HeaderRight = styled.div`
  .hot {
    width: 46px;
    height: 29px;
    background-color: #c20c0c;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #aaa;
  }
`