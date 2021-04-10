import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage'


const App = () => {
  const [count,setCount] = useLocalStorage("count",0)

 

  return (
    <>
    
      <h1>
        {`${count}`}
      </h1>
      <button onClick={()=>{setCount(count+1)}}>sla</button>
      
    </>
  );
}

export default App;
