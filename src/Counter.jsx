import * as React from "react"
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

handleIncrement=()=>{
    console.log("counter")
this.setState((prevState)=>({
counter:prevState.counter+1
}))
}
componentDidUpdate(preProps, prevstate){
console.log(prevstate,"prevState")
if (prevstate.counter!== this.state.counter){
    console.log("hello there")
}
}
handleDecrement=()=>{
    this.setState((prevState)=>({
        ...prevState,
    counter:prevState.counter-1
    }))
    }

render(){
    return(
    <div>
        <div>{this.state.counter}</div>
        <button onClick={this.handleIncrement}>+ Increment</button>
        <button onClick={this.handleDecrement}>- Decrement</button>
    </div>
    )
}
}
export default Counter