

const privateStore = ()=>{
    let store
    return {
        getState:()=>{
            return store
        },
        setState :(next:string)=>{
            store=next
        }
    }
}
export const customStore =  privateStore()