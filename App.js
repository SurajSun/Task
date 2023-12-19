
import { useState } from 'react';
import './App.css';

function App() {

  const [val1,setVal1] = useState(0);
  const [val2,setVal2] = useState(0);

const [op,setOp] = useState(0);  
  const addfun  = () =>{
    console.log("fuct run")
    setOp(parseInt(val1)+parseInt(val2))
    console.log("op",op)
  }
  return (
    <div className="App">

     <div>
     <input value={val1} type ='number' onChange={(e) => setVal1(e.target.value)}></input><br/>
      <input value={val2} type ='number' onChange={(e) => setVal2(e.target.value)}></input>
      

     </div>
     <div>
     <span> this is calculation = {op}</span><br></br>
    <button onClick={() => addfun()}>add</button>
     </div>
      
    </div>
  );
}

export default App;
