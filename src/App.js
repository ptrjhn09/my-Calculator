
import './App.css';
import { useState } from 'react';

function App() {

  const [addNum, setNum] = useState (1);
  const [multiplyNum, setMultiplyNum] = useState (1);
  const [divisionNum, setDivisionNum] = useState (100);
  const [subsNum, setSubsNum] = useState (100);

  return (

      
    <div>

      <button onClick={()=> setNum(addNum +1)}>add</button><br/><br/>
      <p>{addNum}</p>

      <button onClick={()=> setMultiplyNum(multiplyNum * 2)}>Multiply</button>
      <p>{multiplyNum}</p>

       <button onClick={()=> setDivisionNum(divisionNum / 2)}>Divide</button>
       <p>{divisionNum}</p>

       <button onClick={()=> setSubsNum(subsNum - 1)}>Subtract</button><br/><br/>
       <p>{subsNum}</p>

      <button onClick={()=> {setNum(0); setMultiplyNum(1); setDivisionNum(100); setSubsNum(100);}}>Return</button>
<h1>Hellow world</h1>
    </div>
      
  );
}

export default App;
