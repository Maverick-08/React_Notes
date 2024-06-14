import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function Component1() {
    const [todos,setTodos] = useState([])

    // USECASE
    // 1. fetching data
    // 2. setInterval / setTimeout
    // 3. manipulating Dom

    // 1. [] empty dependency array : will run only once when the component is mounted
    // 2. No dependency array will cause infinite request
    // 3. [var] will run whenever the var changes

    useEffect(()=>{
        axios.get("http://localhost:3000/todo")
        .then(function(response){
            setTodos(response.data)
        })
    },[])

    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         //  ->  Effect will run after the component is mounted
    //         try{
    //             let response = await fetch("http://localhost:3000/todo")
    //             response = await response.json()
    //             setTodos(response)
    //         }
    //         catch(err){
    //             console.log(err)
    //         }
    //     }

    //     fetchData();

    //     ->  Effect cleanup (will run before unmounting)
    //     return ()=>{}
    // },[])

  return (
    <div>
        {todos.map(todo => <Todo id={todo.id} title={todo.title} des={todo.description}/>)}
    </div>
  )
}

const Todo = ({id,title,des})=>{
    return(
        <div key={id}>
            <h2>{title}</h2>
            <p>{des}</p>
        </div>
    )
}


