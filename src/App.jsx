
import { useState } from 'react'
import './App.css'

function App() {
  let[count, setCount]=useState(0);
  let[countNegative, setCountNegative]=useState(10);

  let handleAddToClick =() =>{
    count ++
    setCount(count);
    console.log(count);
  }

  let handleAddToClickNegative =() =>{
    countNegative --
    setCountNegative(countNegative);
    console.log(countNegative);
  }


  return (
    <>
     <div>
     <h1>{count}</h1>
      <button className='btn' onClick={handleAddToClick}>click me up</button>
     </div>
      <div>
      <h1>{countNegative}</h1>
      <button className='btnNegative' onClick={handleAddToClickNegative}>click me down</button>
      </div>
    </>
  )
}

export default App
