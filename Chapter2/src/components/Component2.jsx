import React from 'react'
import { memo } from 'react';
import { useState } from 'react'

export default function Component2() {

  return (
    <div>
        <ButtonComponent />
        <Counter1Component x={10}/>
        <Counter1Component x={10}/>
        <Counter1Component x={10}/>
    </div>
  )
}

const ButtonComponent = ()=>{
    const [counter1,setCounter1] = useState(0);
    return(
        <div>
            <button onClick={()=>setCounter1(counter1+1)}>Change x</button>
            <Counter1Component x={counter1}/>
            <Counter1Component x={counter1}/>
            <Counter1Component x={counter1}/>
            <Counter1Component x={counter1}/>
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

