"use client"

import styles from "../../page.module.css";
import {useState} from "react";

const calculateMaxBet=({target, enemy })=>{
    const current = enemy*4.5 - target

    //что бы не получать отрицательные значения
    return Math.min(500 , Math.max(current , 0))
}

export default function page() {
    const [bet1 , setBet1] =useState(145)
    const [bet2 , setBet2] =useState(145)

    const coef1= (Number(bet1)+Number(bet2))/Number(bet1) *0.9;
    const coef2= (Number(bet1)+Number(bet2))/Number(bet2)*0.9;
    const maxBet1 =calculateMaxBet({target:bet1 , enemy:bet2})
    const maxBet2 =calculateMaxBet({target:bet2 , enemy:bet1})
    const isEmpty = Number(bet1) ===0 || Number(bet2)===0
    return (<main>
            <h3> уравнение максимальной ставки </h3>
            <h3>coef1=  bet1+ bet2 /bet1 *0.9</h3>
            <h3>4.95=  x+ y /x *0.9</h3>
            <h3>(4.95/0.9 *x) - x = y</h3>
            <h3>{4.95 / 0.9}x - x = y</h3>
            <h3>{4.95 / 0.9-1} x = y</h3>
            <div style={{display: "flex"}} >

                <Card name={"1"} maxBet={maxBet1} bet={bet1} setBet={setBet1} realCoef={coef1} isEmpty={isEmpty} opponentBet={bet2}/>
                <Card name={"2"} maxBet={maxBet2} bet={bet2} setBet={setBet2} realCoef={coef2} isEmpty={isEmpty} opponentBet={bet1}/>
            </div>
        </main>

    );
}


const buttons =[
    10,20,50,100
]
const format = (num) => {
    return Number(num).toFixed(2)
}

const Card = ({name, realCoef, bet, setBet, isEmpty, opponentBet ,maxBet}) => {
    let fake = 1.8
    if (!isEmpty) {
        fake = realCoef <= 1.1 ? 1.1 : realCoef
        if (realCoef > 4.95) {
            fake = 4.95
        }
    }
    const totalBet = Number(opponentBet)+ Number(bet)
    const betIsBlocked = realCoef<=1.1
    const winPoolUser =fake*bet
    const dotation =( (Number(fake) -Number(realCoef)) *Number(bet))||0

    const platformComission = totalBet*0.1
    const platformSum=Number(platformComission) - Number(dotation)
    return <div className={styles.trim} style={{border: "solid blue 1px"}}>
        bet {name} : <input value={bet} onChange={(e) => {
        setBet(e.target.value)
    }} type="number"/> <br/>
        <b>
            real coef {name} : {realCoef}
        </b>
        <br/>
        <b style={{color: "red"}}>
            user see{name} : {format(fake)}
        </b>
        <br/>
        <label>
            bet {name}
            <input onChange={(e) => {
                setBet(e.target.value)
            }} type="range" min="0" max="1000" step="1" value={bet}/>
        </label>
        <br/>
        <div>
            maxBet: {maxBet}
        </div>
        <fieldset>
            <h3>
                пример кнопок ставки 1
            </h3>
            <div>
                {buttons.map((item) => {
                    if (maxBet < item) {
                        return <></>
                    }
                    return <button onClick={() => {
                        setBet(p => p + item)
                    }} style={{fontSize: 16, padding: 10, margin: 5}} key={item}>{item}</button>
                })}
            </div>

        </fieldset>
        <fieldset>
            <h3>
                пример кнопок ставки 2
            </h3>
            <div>
                {buttons.map((item, key) => {
                    let fixed= item
                    if(maxBet<item){
                        fixed=Math.floor(maxBet )
                    }
                    if (maxBet < item && key!==buttons.length-1) {
                        return <></>
                    }
                    return <button onClick={() => {
                        setBet(p =>Number( p) + Number(fixed))
                    }} style={{fontSize: 16, padding: 10, margin: 5}} key={key}>{fixed}</button>
                })}
            </div>

        </fieldset>

        {betIsBlocked ?
            <span style={{color: "red"}}>  Bet is blocked   </span> :
            <span style={{color: "green"}}> bet is Allowed </span>}
        <div>
            <span style={{color: "lightblue"}}> При победе : </span>

            {isEmpty ? <div>
                    Игра не состоится
                </div> :
                <div>

                    Юзер получит = {format(winPoolUser)}

                    <div style={{background: "lightblue"}}>
                        Платформа :
                        <div> Комиссия {format(platformComission)}</div>
                        <div> Дотация = {format(dotation)}     </div>
                        <div> Прибыль {format(platformSum)}  </div>
                    </div>


                </div>}

        </div>

    </div>
}