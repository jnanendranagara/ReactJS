import React from 'react';

import './App.css';

 import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
  import Ageclass from './task2/Ageclass';
  import Cityclass from './task2/Cityclass';
  import Dobclass from './task2/Dobclass';
  import Login from './task2/Login';
  import Arithamaticoperation from './task3/Arithamaticoperation';
  import Eventchange from './task4/Eventchange';
 
  //import Signin from'./Signin';
//import Login from'./Login';

function App() {
  return (
    <div>
    <Router>
      <switch>
        <Route exact path='/' component={Ageclass}></Route>
        <Route exact path='/1' component={Cityclass}></Route>
        <Route exact path='/2' component={Dobclass}></Route>
        <Route exact path='/3' component={Login}></Route>
        <Route exact path='/4' component={Arithamaticoperation}></Route>
        <Route exact path='/5' component={Eventchange}></Route>


      </switch>
    </Router>
    </div>

    // <div className="App">
    //       <Ageclass title='Age'></Ageclass> 
    //       <Cityclass title='City'></Cityclass> 
    //       <Dobclass title='Date Of Birth'></Dobclass>  
    //       <Login/>  
        
    //    {/* <Signin/> 
    //      <Login/>   */}
     
    // </div>
  );
}

export default App;
