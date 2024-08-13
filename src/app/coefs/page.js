"use client"

import styles from "../page.module.css";
import {useState} from "react";
 

export default function page() {
    const [bet1 , setBet1] =useState(0)
    const [bet2 , setBet2] =useState(0)

    const coef1= (Number(bet1)+Number(bet2))/Number(bet1) *0.9;
    const coef2= (Number(bet1)+Number(bet2))/Number(bet2)*0.9;

    let isFake = false
    if(coef1 < 1.01 || coef2 < 1.01 ||coef1>10**10 ||coef2>10**10 || isNaN(coef2)||isNaN(coef1)){
        isFake=true
    }

    return (
        <main style={{display:"flex"}} className={styles.main}>
            <div className={styles.trim} style={{border:"solid blue 1px"}}>
                bet1 : {bet1} <br/>
                <b>
                    real coef1 : {coef1}
                </b>
                <br/>
                <b style={{color: "red"}}>
                    fake coef1 : {!isFake? coef1 : 1.8}
                </b>
        <br/>
                <label>
                    bet2
                    <input onChange={(e) => {
                        setBet1(e.target.value)
                    }} type="range" min="0" max="100" step="1" value={bet1}/>
                </label>
            </div>

            <br/>


            <div className={styles.trim} style={{border: "solid blue 1px"}}>
                bet2 : {bet2} <br/>
                <b>
                    real coef2 : {coef2}
                </b>
                <br/>
                <b style={{color: "red"}}>
                    fake coef2 : {!isFake? coef2 : 1.8}
                </b>
                <br/>
                <label>
                    bet2
                    <input onChange={(e) => {
                        setBet2(e.target.value)
                    }} type="range" min="0" max="100" step="1" value={bet2}/>
                </label>
            </div>


        </main>
    );
}
