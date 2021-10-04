import React from 'react';
import './App.css';
import BoxScore from './BoxScore';
import LeagueSchedule from './LeagueSchedule';

function PastMatchup({match}) {
    const sp = match.params.week;
    let matchup = match.params.matchup;
    matchup = parseInt(matchup)
    let period = LeagueSchedule.findIndex((element) => element.week === sp) + 1;
    return (
       <div>
           {BoxScore(period, matchup)}
       </div>
    )
}

export default PastMatchup;