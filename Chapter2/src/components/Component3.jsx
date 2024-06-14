import React from 'react'

export default function Component3() {
  return (
    <div>
      <WrapperComponent>{<Compo1 />}</WrapperComponent>
      <WrapperComponent>{<Compo2 />}</WrapperComponent>
    </div>
  )
}

const WrapperComponent = ({children})=>{
    return(
        <div style={{backgroundColor:"wheat", borderRadius:"10px"}}>
            {children}
        </div>
    )
}

const Compo1 = ()=>{
    return(
        <>
            <p style={{color:"black"}}> Child Componentn 1</p>
        </>
    )
}
const Compo2 = ()=>{
    return(
        <>
            <p style={{color:"black"}}> Child Component 2</p>
        </>
    )
}