<<<<<<< HEAD
=======
 
>>>>>>> 1b9bee6f6ceb32cfc3e6d6e0493ebff685582e85
import './App.css';
import Navbar from './Component/navbar/navbar'

import Movies from './Component/Movies/Movie';
import Form from './Component/Register/form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
<<<<<<< HEAD
    
    <>
      <Router>
  


      <Navbar />
      
        <Switch>
        <Route path="/register" exact component={Form}/>
        <Route path="/" exact component={Movies}/>
 
        </Switch>


      </Router>
=======
    < >
   
>>>>>>> 1b9bee6f6ceb32cfc3e6d6e0493ebff685582e85
    </>
  );
}

export default App;

