import {text2} from "./constant";
import {Button} from "../only-client/button";

const Page = async () => {

    const splitText = text2.slice(2 , 60)
    console.log(splitText)
    return <div>
        <h1>    server + client </h1>
<Button/>
        {splitText}


    </div>
}

export default Page;