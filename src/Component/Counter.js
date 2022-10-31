import React from "react";

export class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0,
            TextP : '',
            counter : 0
        }
    }
//counter
 componentDidMount(){
    setInterval(() => {
        this.setState({...this.state,counter : this.state.counter+1})
    }, 1000);
 }

 componentDidUpdate(){
    console.log('Update')
 }

 componentWillUnmount(){
    console.log('Unmount')
 }
 increment=()=> this.setState({...this.state,count : this.state.count+1})
 decrement=()=> this.state.count>0 && this.setState({...this.state,count : this.state.count-1})

//construction
    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <h1>Counter component</h1>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
                <br/>
            

                <h1>Bio :</h1>
                <img style={{width:"500px", margin:"30px"}} src='./image.jpg' alt='Not Found'/>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <br/>
                <h2>Profession :Student</h2>
                
            </div>
        )
    }
}