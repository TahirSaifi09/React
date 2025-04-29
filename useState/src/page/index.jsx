import React, { useState } from "react";
// import React, {useState} from "react"; 
export default function Hooks(){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")
    const [car, setCar] = useState({
        brand:"Ford",
        model:"Mustang",
        year:2025,
        color:"Green"
    })

    const [inputValue, setInputValue]=useState("Tahir")
    const onChange=(event)=>{
        const newval=event.target.value;
        setInputValue(newval)
    }

    
    // function increase(){
    //     setCount(count + 1)
    // }

    const increase =() =>{
        setCount(count + 1)
    }
    return(
        <div className="bg-black w-screen ">
            <button onClick={increase}>You presed me {count} time</button>
            <h1>This color is {color}</h1>
            <button onClick={()=>setColor("blue")}>Blue</button>
            <button onClick={()=>setColor("Green")}>Green</button>
            <button onClick={()=>setColor("Black")}>black</button>
            <div>
                <h1>This is {car.brand} car.</h1>
                <p>It is a {car.color} {car.model} from {car.year}</p>
            </div>
            <div>
                <h1>{inputValue}</h1>
                <input type="text" value={inputValue} placeholder="type anything..." onChange={onChange}/>
            </div>

        </div>
    )
}