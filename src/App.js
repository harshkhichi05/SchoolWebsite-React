import logo from './logo.svg';
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import About from './Aboutus'
import  Admission from './Admission'
import Contact from './Contact'
function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
          <Homepage/>
         <Route path="/" component={Homepage}/>
         <Route path="/about"  component={About}/>
         <Route path="/admission"  component={Admission}/>  
          
       </Switch>
       </Router>
      
    </div>
  );
}

export default App;
