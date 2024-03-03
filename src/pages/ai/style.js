import styled from 'styled-components'

export const AiWrapper = styled.div`
  .box-iframe {
    width: 100%;
    height: 100%;
    min-height: 700px;
  }

  .box-iframe::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  .box-iframe::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom right, #4d7fff 0%, #1a56ff 100%);
    border-radius: 5px;
  }

  .box-iframe::-webkit-scrollbar-track {
    background-color: #ddd;
    border: 1px solid #ccc;
  }

  .box-iframe::-webkit-scrollbar-button {
    background-color: #4d7fff;
    border-radius: 5px;
  }

  .box-iframe::-webkit-scrollbar-button:hover {
    background-color: #999999;
  }
  iframe::-webkit-scrollbar {
    width: 10px;
  }

  iframe::-webkit-scrollbar-thumb {
    background-color: red;
  }
`
