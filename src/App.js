import './App.css';
import {   BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from './Components/Home/Home';


function App() {
  return (
    <div className="App">
    
      <Router>
        <Switch>
        <Route path="/" component={Home} exact></Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
