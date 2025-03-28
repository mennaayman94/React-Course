import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../slices/cart"

const Cart=()=>{
    const items= useSelector((store)=>store.cart.items)
    const dispatch= useDispatch()
return (
    <div>
    {items.length>0?items.map((item)=>(
       <div>
        <div>{item.title}</div>
        <div>{item.quantity}</div>
        </div>
    )):"Cart is empty"}
    <Button onClick={()=>dispatch(clearCart())}>Reset Cart</Button>
    </div>
    //icon 
)
}
export default Cart