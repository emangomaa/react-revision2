import React ,{useState} from 'react'

function HookUsestateObject() {
    const [name,setName] = useState({fristName:"",lastName:""})
  return (
    <div>
        <input type='text' value={name.fristName} onChange={(e)=>setName({...name,fristName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/>
        <h3>
        {`fristName:${name.fristName} lastName:${name.lastName}`}
        </h3>
    </div>
  )
}

export default HookUsestateObject