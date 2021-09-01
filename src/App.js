
import './App.css';
import React from 'react';
import Nav from './Nav';
import Standings from './Standings';
import Schedule from './Schedule';
import PlayerDetail from './PlayerDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TeamPage from './TeamDetail';
import BoxScore from './BoxScore';
import ScrollToTop from './ScrollToTop';
import Rules from "./Rules";




function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Standings" component={Standings} />
          <Route path="/Schedule" component={Schedule} />
          <Route path="/Rules" component={Rules} />
          <Route path="/Player/:id" component={PlayerDetail} />
          <Route path="/Team/:name" component={TeamPage} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home</h1>
      {BoxScore(16)}
    </div>
  )}

export default App;
