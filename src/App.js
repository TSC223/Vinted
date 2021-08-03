import React from "react" ;
import { BrowserRouter as Router,Switch,Route } from "react-router-dom" ;
import "./App.css";
import Home from "../src/containers/Home" ;
import Offers from "../src/containers/Offers";



function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path="/Offers/:id" >
            <Offers/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>

        </Switch>
      </Router>
    </>
  );
}



export default App;