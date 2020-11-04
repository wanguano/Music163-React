import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/css/reset.css'
import App from './App'

document.addEventListener('keydown', (e) => {
  if(e.ctrlKey && e.key === 'k')  {
    console.log('ctrl + k')
    // 阻止默认事件
    e.preventDefault()
  }
})

ReactDOM.render(<App />, document.getElementById('root'))
