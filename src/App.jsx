import { useState } from 'react'
import Wrapper from './pages/Wrapper'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full'>
        <Wrapper />
      </div>

    </>
  )
}

export default App
