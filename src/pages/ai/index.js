import React, { memo } from 'react'
import { AiWrapper } from './style'

const Ai = memo(() => {
  return (
    <AiWrapper className="w980">
      <iframe
        title="ai"
        className="box-iframe custom-scrollbar"
        src="https://udify.app/chatbot/ZqpXU3hyv7xLlWit"
        frameborder="0"
        allow="microphone"
      ></iframe>
    </AiWrapper>
  )
})

export default Ai
