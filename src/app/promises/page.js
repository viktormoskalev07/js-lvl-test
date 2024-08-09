"use client"

import styles from "../page.module.css";
import {showModal} from "@/app/promises/notify/modalManager";
import {useState} from "react";

const pages = [
    "promises"
]

const test =async ()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random()
            console.log(random)
            if (random > 0.5) {
                resolve("good")
            } else {
                reject("bed")
            }

        }, 500)
    })
}

const test2 =async ()=>{
    console.log(1)
    try{
       const response = await test()
        console.log({response})
    }catch (e){
        console.log("err" , e )
    }

    console.log(2)
}


export default function page() {
    const [result , setResult] = useState("");
    const handleShowModal = async () => {
        setResult("")
        try{
           await showModal('А вы уверены?');
           setResult("привет")
        }catch (e){
            setResult("отказ")
        }

    };

    return (
        <main className={styles.main}>
            <div>
                <button onClick={handleShowModal}>
                    написать привет
                </button>
                {result}
            </div>
        </main>
    );
}
