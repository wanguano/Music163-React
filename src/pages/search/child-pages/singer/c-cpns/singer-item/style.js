const { default: styled } = require('styled-components')

export const AlbumItemWrapper = styled.div`
  width: 130px;
  height: 154px;
  overflow: hidden;
  padding: 0 0 30px 0;
  line-height: 1.4;
  margin-right: 62px;
  margin-bottom: 30px;

  &:nth-child(5n) {
    margin-right: 0;
  }

  .cover-pic {
    position: relative;
    width: 130px;
    height: 130px;

    img {
      width: 100%;
      height: 100%;
    }

    .image_cover {
      background-position: 0 -680px;
    }
  }

  .singer-info {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    .singer_icon {
      width: 17px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
`
