"use client"

import styles from "../../page.module.css";
import {useState} from "react";
 

export default function page() {
    const [bet1 , setBet1] =useState(10)
    const [bet2 , setBet2] =useState(20)

    const coef1= (Number(bet1)+Number(bet2))/Number(bet1) *0.9;
    const coef2= (Number(bet1)+Number(bet2))/Number(bet2)*0.9;

    const isEmpty = Number(bet1) ===0 || Number(bet2)===0
    return (
        <main style={{display:"flex"}} className={styles.main}>

            <Card  name={"1"} bet={bet1} setBet={setBet1}  realCoef={coef1}  isEmpty={isEmpty} opponentBet={bet2}/>
            <Card  name={"2"} bet={bet2} setBet={setBet2} realCoef={coef2}  isEmpty={isEmpty} opponentBet={bet1}/>
        </main>
    );
}

const format = (num)=>{
   return  Number(num).toFixed(2)
}

const Card=({name , realCoef , bet, setBet  ,isEmpty , opponentBet})=> {
    let fake=1.8
    if(!isEmpty){
        fake=    realCoef<=1.1 ? 1.1:realCoef
        if(realCoef>4.95){
            fake=4.95
        }
    }
    const totalBet = Number(opponentBet)+ Number(bet)
    const betIsBlocked = realCoef<=1.1 && bet>=50
    const winPoolUser =fake*bet
    const dotation =( (Number(fake) -Number(realCoef)) *Number(bet))||0
    const streamerComission =  bet*0.025
    const bothStreamersComission  = totalBet*0.025
    const platformComission = totalBet*0.075
    const platformSum=Number(platformComission) - Number(dotation)
    return <div className={styles.trim} style={{border: "solid blue 1px"}}>
        bet {name} : {bet} <br/>
        <b>
            real coef {name} : {realCoef}
        </b>
        <br/>
        <b style={{color: "red"}}>
            user see{name} : {format(fake)}
        </b>
        <br/>
        <label>
            bet2
            <input onChange={(e) => {
                setBet(e.target.value)
            }} type="range" min="0" max="100" step="0.01" value={bet}/>
        </label>
        <br/>
       {betIsBlocked?
           <span style={{color:"red"}}>  Bet is blocked   </span> :
           <span style={{color:"green"}}> bet is Allowed </span>}
        <div>
            <span style={{color:"lightblue"}}> При победе : </span>

            {isEmpty? <div>
                 Игра не состоится
            </div>:
                <div>

                Юзер получит  =  {format(winPoolUser)}


                    <div style={{background: "lightcoral"}}>
                        Стример
                        <div> Комиссия    {format(streamerComission)}</div>
                        <div> Сумма комисий {format(bothStreamersComission)} </div>
                    </div>


                    <div style={{background: "lightblue"}}>
                        Платформа :
                        <div> Комиссия {format(platformComission)}</div>
                        <div> Дотация = {format(dotation)}     </div>
                        <div> Прибыль  {format(platformSum)}  </div>
                    </div>


                </div>}

        </div>

    </div>
}