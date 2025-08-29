import {useEffect, useState} from "react";
import {customStore} from "./customStore";


export const Interval=()=>{

    const [counter , setCounter] =useState(0);

    useEffect(() => {
        const interval = setInterval(()=>{
            setCounter((prev)=>prev+1)
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    }, []);
        const store =customStore.getState()
    return  <div>

        timer : {counter}

        <div> store : {store}</div>
    </div>
}