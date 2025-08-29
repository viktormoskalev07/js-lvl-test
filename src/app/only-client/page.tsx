"use client"
import {text} from "./constant";

const Page = () => {

    const splitText = text.slice(2 , 60)
    console.log(splitText)
   return <div>

       {splitText}


    </div>
}

export default Page;