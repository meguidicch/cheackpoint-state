import React from 'react';
import { Counter } from './Component/Counter';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      count : 0,
      testP : ''
    }
  }
  
// button
state={
  show : false,
  test :0,
  
}
handleShow=()=> this.setState({...this.state,show :!this.state.show})

  render(){
    return(
      <div>
        <h1>Asma meguidich</h1>
        <button onClick={this.handleShow}>{this.state.show? "Hide" : "Show"}</button>
        {
          this.state.show  &&   <Counter test={this.state.test}/>
        }
      
    
      </div>
    )
  }
  
 }


export default App;
