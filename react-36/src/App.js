import './App.css';
import React from 'react';
import User1 from './User1';
function App() {
  const users = [
    {
      name: 'Anil', email: 'anil@test.com', contact:"111"
       },
    {
      name: 'Burce', email: 'bruce@test.com', contact:"2220" 
    },
    {
      name: 'Peter', email: 'peter@test.com', contact:"333" 
    },
    {
      name: 'Sam', email: 'sam@test.com',contact:"444" 
    },
  ]
  return (
    <div className="App">
      <h1>Reuse component with list</h1>
     {
       users.map((item,i)=>
       <User1 data={item} />
       )
     }
      <h1>
        
      </h1>
     
     </div>
  );
}

export default App;