
import './App.css';
import { useState } from 'react';

function App() {

  const [addNum, setNum] = useState (1);
  const [multiplyNum, setMultiplyNum] = useState (1);
  const [divisionNum, setDivisionNum] = useState (1);

  return (

      
    <div>

      <button onClick={()=> setNum(addNum +1)}>add</button><br/><br/>
      <p>{addNum}</p>

      <button onClick={()=> setMultiplyNum(multiplyNum * 2)}>Multiply</button>
      <p>{multiplyNum}</p>

       <button onClick={()=> setDivisionNum(divisionNum / 2)}>Multiply</button>
       <p>{divisionNum}</p>

        <button onClick={()=> {setNum(0); setMultiplyNum(1); setDivisionNum(1)}}>Clear</button>

    </div>
      
  );
}

export default App;
