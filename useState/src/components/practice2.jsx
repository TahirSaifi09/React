
import { useState } from "react"

export default function Practice2(){
    const [name, setName]= useState(0)
    
    const increaseNumber=()=>{
        setName(name+10)
    }
    return(
        <div>
            {/* <button onClick={()=>setName(name+10)} style={{padding:"10px", marginTop:"10px" }}> Click me</button> */}
            <button onClick={increaseNumber} style={{padding:"10px", marginTop:"10px" }}> Click me</button>
            <p>Hlo i am {name}</p>
        </div>
    )
}