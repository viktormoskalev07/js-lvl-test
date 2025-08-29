"use client"
const Page = () => {

    const text = Array(255).fill(1).map((_, i) => <div key={i}> {Array(i).fill(1).map((_, i2) => i2)}</div>)
    return <div>
        <h1> only client</h1>
        {text} </div>
}

export default Page;