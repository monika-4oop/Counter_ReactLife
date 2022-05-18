import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    /* ===============================================
    In function component , useEffect use for componentDicMount, and componentDidUpdate,








    If you are familiar with React class lifecycle methods, you can think of useEffect Hooks are componentDidMount, componentDidUpdate and componentWillUnmount combined.


    
    =================================================*/

    useEffect(()=>{
     /*It runs first time when component first time render in DOM ,  it is called componentDidMount*/
     if(count === 0){
         console.log("componentDidMount!!!")
     }else{
         console.log("componentDidUpdate")
     }


    },[count])








    const handleCount = (value) => {
        setCount(count + value);
    } 
  return (
    <>
      <div className="container">
          <p>Count : {count}</p>
          <button onClick={()=>handleCount(1)}>Increment</button>
          <button onClick={()=>handleCount(-1)}>Decrement</button>
      </div>
    </>
  )
}

export default Counter
