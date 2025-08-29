



const Parent = async  ()=>{

// Example usage:

    async function getUser() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1" );
        if (!res.ok) throw new Error("Failed to fetch user");
        return res.json();
    }

   const user = await getUser();
    return <div>
        {JSON.stringify(user.name, null, 2)}

    </div>
}


export default Parent;