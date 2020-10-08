import React from 'react'
import './App.css';
import Createemployee from './Components/Createemployee';
import Employeeupdate from './Components/Employeeupdate';
import Editemployee from './Components/Editemployee';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Deleteemployee from './Components/Deleteemployee';

function App() {
  return (
    <div className="App">
      
      <Router>

      <Switch>
          <Route path="/"exact component={Createemployee}/>
          <Route path="/update" exact component={Employeeupdate}/>
          <Route path="/edit"  exact component={Editemployee}/>
          <Route path='/delete' exact component={Deleteemployee}/>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
