import styled from 'styled-components'

export const FooterWrapper = styled.div`
  width: 100%;
  height: 115px;
  border-top: 1px solid #d3d3d3;
  background-color: #f2f2f2;
  margin-bottom: 53px;
  .footer-content {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
`

export const FooterLeft = styled.div`
  width: 520px;
  padding-top: 15px;
  line-height: 24px;

  .copy > a {
    color: #999;
  }

  .line {
    margin: 0 8px 0 10px;
    color: #c2c2c2;
  }

  .footer-company,
  .footer-alert,
  .footer-manage-system {
    margin-right: 10px;
  }
`

export const FooterRight = styled.ul`
  display: flex;
  width: 420px;
  margin-top: 33px;

  .item {
    display: flex;
    flex-direction: column;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;
      background-image: url(${require('@/assets/img/sprite_footer_02.png')});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }

    :nth-child(2) .link {
      background-position: 0 0;
    }

    :nth-child(3) .link {
      background-position: -60px -50px;
    }

    :nth-child(4) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${require('@/assets/img/sprite_footer_01.png')});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }

    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }

    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`
