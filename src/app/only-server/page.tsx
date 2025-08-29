import {text2} from "./constant";

const Page = async () => {

    const splitText = text2.slice(2 , 60)
    console.log(splitText)
    return <div>

        {splitText}


    </div>
}

export default Page;