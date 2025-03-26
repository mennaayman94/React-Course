import * as React from "react"
import Input from "./Input"
class Product extends React.Component{

    constructor(props){
        super(props)
        //state
        this.state={
            name:"Clothes",
            price:30,
            category:["x","y"]
        }

    }
componentDidMount(){
    
}
componentDidUpdate(){

}
handleClick=()=>{
    this.setState((prev)=>({
        ...prev,
        name:"Shoes",
    }))
}
// function handleClick(){

// }
componentWillUnmount(){
    clearInterval()
}

    render(){
        return (
            <div>
                <Input name={this.state.name}/>
                <button onClick={this.handleClick}/>
            </div>
        )
    }

}
export default Product