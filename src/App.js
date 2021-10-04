
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
import History from "./History";
import PastMatchup from "./PastMatchup";



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
          <Route path="/History" component={History} />
          <Route path="/Player/:id" component={PlayerDetail} />
          <Route path="/Team/:name" component={TeamPage} />
          <Route path="/Past/:week/:matchup" component={PastMatchup} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1>Home</h1>
      <h4>Through 9/29/2021</h4>
      {BoxScore(20)}
    </div>
  )}

export default App;
