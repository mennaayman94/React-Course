import { useState } from "react"

function Counter(){
const[counter, setCounter]= useState(0)
// const[student, setStudent]= useState({
//     name:"",
//     age:20
// })
const handleIncrement=()=>{
setCounter((counter)=>counter+1)
// setStudent((marwan)=>({
// ...marwan,
// age:25
// }))
}
    return(
        <>
        <div>
        <div>{counter}</div>
         <button onClick={handleIncrement}>Increment</button>
        </div>
        </>

    )
}
export default Counter