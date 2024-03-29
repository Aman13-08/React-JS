import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  const addvalue = () =>{
    console.log("Clicked " , counter);
   //counter = counter +1
  setCounter(counter+1)
  }
  const removeValue = () => { if (counter > 0)  { setCounter(counter - 1); } };
  // const removeValue  = () =>{
  //   setCounter(counter -1)
  // }
  return (
    <>

   <h1>chai aur react</h1>
   <h2>Counter value : {counter}</h2>

   <button onClick={addvalue}>Add value </button>
   <br />
   <button onClick = {removeValue}>remove value </button>
   <p>footer: {counter}</p>
    </>
  )
}

export default App
