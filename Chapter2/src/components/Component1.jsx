import React from 'react'
import { memo } from 'react';
import { useState } from 'react'

export default function Component1() {
    const [counter1,setCounter1] = useState(0);
    const [counter2,setCounter2] = useState(0);

    // Whenever the value of counter1 or counter2 changes COMPONENT1 rerenders but because of memo() only those child components rerenders whose props have changed.


  return (
    <div>
        <ButtonComponent x={counter1} y={counter2} setX={setCounter1} setY={setCounter2}></ButtonComponent>   
        <Counter1Component x={counter1}/> 
        <Counter1Component x={counter1}/> 
        <Counter1Component x={counter1}/> 
        <Counter1Component x={counter1}/> 
        <Counter2Component y={counter2}/> 
        <Counter2Component y={counter2}/> 
        <Counter2Component y={counter2}/> 
        <Counter2Component y={counter2}/> 
    </div>
  )
}

const ButtonComponent = ({x,y,setX,setY})=>{
    return(
        <div>
            <button onClick={()=>setX(x+1)}>Change x</button><br />
            <button onClick={()=>setY(y+1)}>Change y</button>
        </div>
    )
}

const Counter1Component = memo(({x})=>{
    return(
        <div>
            <p style={{color:"red"}}>Counter 1 : {x}</p>
        </div>
    )
})

const Counter2Component = memo(({y})=>{
    return(
        <div>
            <p style={{color:"black"}}>Counter 2 : {y}</p>
        </div>
    )
})
