import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Landing from "./Landing";
import EventDetails from "./EventDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return(
      <Router>
          <div className="App">
              <Header/>
              <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/event-:eventKey" component={EventDetails}/>
              </Switch>
              <Footer/>
          </div>
      </Router>
    );
}

export default App;
