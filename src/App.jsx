import { useState } from 'react'
import Wrapper from './pages/Wrapper'
import LandingPage from './pages/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-full'>
        <LandingPage />
      </div>

    </>
  )
}

export default App
