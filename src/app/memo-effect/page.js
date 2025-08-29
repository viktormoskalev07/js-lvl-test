"use client"
import React, { useState, useEffect } from "react";

const arr=Array(5).fill(1)

const Child =({item}) => {
    useEffect(() => {
        if(2+2===4 ){
            console.log("test")
            return
        }
        return () => {
            console.log("remove  3d model" );
        };
    }, []);
    useEffect(()=>{
        console.log("render");
        return () => {
            console.log("return");
        }
    },[])

    return (
        <div style={{ padding: "10px", border: "1px solid red", marginTop: "20px" }}>
            {item}
        </div>
    );
} ;

export default function App() {
    const [show, setShow] = useState(false);
    if(show){
        return null
    }
    return (
        <div>
            <h2>Демонстрация работы React.memo и useEffect</h2>
            <button onClick={() => setShow((s) => !s)}>
                Переключить состояние (Show: {String(show)})
            </button>
            {arr.map((item, index) => (
                <Child key={index} item={index} />
             ))
            }
        </div>
    );
}