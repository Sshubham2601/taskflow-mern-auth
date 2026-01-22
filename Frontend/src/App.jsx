import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(1)

 const increament = () => {
  setCount(prev => prev * 2);
};

const decreament = () => {
  setCount(prev => prev>0 ? Math.floor(prev/2):0);
};

  const resetCount=()=>{
    setCount(0);
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-500'>
      {/* <h1 className="text-3xl font-bold text-green-600">
        Tailwind is working
      </h1> */}
      <p >Total Count is:{count}</p>
      <button onClick={increament}>Increament</button>
      <button onClick={decreament}>Decreament</button>
      <button onClick={resetCount}>Reset</button>
    </div>
    
  )
}

export default App
