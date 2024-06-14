import React, { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  let x = 1; // This will not cause rerender

  function change(){
    ++x;
    console.log(x);
  }

  return (
    <div>
        <Component1  change={change} setCount={setCount} x={x} count={count}/>
    </div>
  )
}

function Component1({change,setCount,x,count}){
  return(
    <div>
      <p>X : {x}</p>
      <p>count : {count}</p>
      <button onClick={change}>Change x</button><br />
      <button onClick={()=>setCount(count+1)}>Change Count</button>
    </div>
  )
}

export default App
