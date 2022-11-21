import React,{useState} from 'react'

function HookUsestateArray() {
    const [numbers,setNumbers] = useState([])
    const pushInArray = ()=>{
        setNumbers([...numbers,Math.floor(Math.random()*10)+1])
    }
  return (
    <div>
        
        <button onClick={pushInArray}>Push in Array</button>
        <ul>
            {numbers.map((num,index) => <li key={index}>{num}</li>)}
        </ul>
        <button onClick={()=>setNumbers([])}>clear All</button>
    </div>
  )
}

export default HookUsestateArray