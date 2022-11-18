import React,{useState} from 'react'

function HookCounterTwo() {
    let initCount = 0;
    const [count,setCount] = useState(initCount)

   function increaseCountFive(){
        for(let i =0 ;i<5 ;i++){
            setCount(prevCount => prevCount +1)
        }
    }
  return (
    <div>
        count : {count} 
        <button onClick={()=>setCount(prevCount => prevCount +1)}>Increase count </button>
        <button onClick={()=>setCount(prevCount =>{
            if(prevCount > 0)
               return prevCount -1
            else
                return initCount

        })}>Decrease count </button>
        <button onClick={()=>setCount(initCount)}> Reset count </button>
        <button onClick={increaseCountFive}>Incraese count 5 </button>
    </div>
        
  )
}

export default HookCounterTwo