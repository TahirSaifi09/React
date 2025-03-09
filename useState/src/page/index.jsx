import React, { useState } from "react";
// import React, {useState} from "react"; 
export default function Hooks(){

    const [count, setCount] = useState(0)
    
    // function increase(){
    //     setCount(count + 1)
    // }

    const increase =() =>{
        setCount(count + 1)
    }
    return(
        <div className="bg-black h-screen w-screen">
            <button onClick={increase}>You presed me {count} time</button>

        </div>
    )
}