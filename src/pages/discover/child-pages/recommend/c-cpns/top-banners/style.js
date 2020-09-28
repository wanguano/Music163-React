const { default: styled } = require('styled-components')

export const BannerWrapper = styled.div`
  width: 100%;
  height: 270px;

  .banner {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  img {
    width: 100%;
  }
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  width: 250px;
  background: url(${require('@/assets/img/download.png')});
`

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    cursor: pointer;
    background-image: url(${require('@/assets/img/banner_sprite.png')});

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
    &:nth-child(1) {
      left: -68px;
      background-position: 0 -360px;
    }
    &:nth-child(2) {
      right: -68px;
      background-position: 0 -508px;
    }
  }
`
