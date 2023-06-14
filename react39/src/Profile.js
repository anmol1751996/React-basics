import './App.css';
import React,{PureComponent} from 'react';
class Profile extends React.Component{
 
  
  render()
  {
    console.log("check-rerendering")
    return(
      <div className='App'>
         <h1>User Component{this.props.count}</h1>
         
         </div>
     
    );
    }


}

export default Profile;