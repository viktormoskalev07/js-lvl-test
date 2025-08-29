"use client"
import {text} from "./constant";
import {Button} from "./button";

const Page = () => {

    const splitText = text.slice(2 , 60)
    console.log(splitText)
   return <div>
       <h1>    client + client </h1>
       <Button/>
       {splitText}


    </div>
}

export default Page;