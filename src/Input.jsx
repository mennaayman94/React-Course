import * as React from "react"
class Input extends React.Component{
constructor(props){
    super(props)
    console.log(props,"props")
}


    render(){
        return (
            <div>
{this.props.name}
            </div>
        )
    }
}
export default Input