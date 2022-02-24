import { useState } from 'react'
import './App.css'
import FriendList from './components/FriendList' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <FriendList/>
  )
}

export default App
