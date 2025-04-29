import React, { useState } from "react";
// import React, {useState} from "react"; 
export default function Hooks(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")


    
    // function increase(){
    //     setCount(count + 1)
    // }

    const increase =() =>{
        setCount(count + 1)
    }
    return(
        <div className="bg-black h-screen w-screen ">
            <button onClick={increase}>You presed me {count} time</button>
            <h1>This color is {color}</h1>
            <button onClick={()=>setColor("blue")}>Blue</button>
            <button onClick={()=>setColor("Green")}>Green</button>
            <button onClick={()=>setColor("Black")}>black</button>
        </div>
    )
}