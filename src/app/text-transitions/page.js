"use client"

import styles from "./styles.module.scss";
import {showModal} from "@/app/promises/notify/modalManager";
import {useState} from "react";



export default function page() {
    const [result , setAnimated] = useState(false);
    const handle = async () => {
        setAnimated(p=>!p)
    };

    return (
        <main className={styles.main}>
            <div className={styles.text + "  " + (result?styles.animated:"")}>

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci debitis error ipsum, itaque neque porro repellat! Amet asperiores, at incidunt quidem rerum similique suscipit velit.

                <button onClick={handle}>
                    {result?"убрать": "добавить"} прозрачность
                </button>

            </div>
        </main>
    );
}
