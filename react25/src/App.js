import './App.css';
import React from 'react';
class app extends React.Component{
  constructor()
  {
    super();
    console.log("constructor")
    this.state={
      count:" 0 "
    }
    }
    componentDidUpdate(preProps,preState,snapshot)
    {
console.log("componentDidUpdate",preState.count,this.state.count)
if(this.state.count<10)
{
  this.setState({count:this.state.count+1})
  
}
}

render()
{
  // console.log("render")
    
  return (
    <div className="App">
     <h1>Component Did update{this.state.count}</h1>
     <button onClick={()=>{this.setState({count:1})}}> Update Name</button>
     
    </div>
  );
  
}
}

export default app;