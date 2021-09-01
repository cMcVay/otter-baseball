import './App.css';
import React from 'react';
import LeagueSchedule from "./LeagueSchedule";
import {teams, getName, getLT} from "./Teams";



function Schedule() {
    return (
        <div className="App" >
            <h1>Schedule</h1>
            {LeagueSchedule.map(period => (
                <div key={`${period.week}`}>
                    <h4>Scoring Period: {period.week}</h4>
                    <div className="scoringPeriodContainer">
                    <table className="matchUpBox">
                        <tbody>
                           <tr>
                                <td>{getName(teams, period.matchUp[0].Away)}</td>
                                <td>{getLT(teams, period.matchUp[0].Away, LeagueSchedule.indexOf(period)+1)}</td>
                            </tr>
                            <tr>
                                <td>{getName(teams, period.matchUp[0].Home)}</td>
                                <td>{getLT(teams, period.matchUp[0].Home, LeagueSchedule.indexOf(period)+1)}</td>
                            </tr>  
                        </tbody>
                    </table>
                    <table className="matchUpBox">
                        <tbody>
                           <tr>
                                <td>{getName(teams, period.matchUp[1].Away)}</td>
                                <td>{getLT(teams, period.matchUp[1].Away, LeagueSchedule.indexOf(period)+1)}</td>
                            </tr>
                            <tr>
                                <td>{getName(teams, period.matchUp[1].Home)}</td>
                                <td>{getLT(teams, period.matchUp[1].Home, LeagueSchedule.indexOf(period)+1)}</td>
                            </tr>  
                        </tbody>
                    </table>
                    <table className="matchUpBox">
                        <tbody>
                           <tr>
                                <td>{getName(teams, period.matchUp[2].Away)}</td>
                                <td>{getLT(teams, period.matchUp[2].Away, LeagueSchedule.indexOf(period)+1)}</td>
                            </tr>
                            <tr>
                                <td>{getName(teams, period.matchUp[2].Home)}</td>
                                <td>{getLT(teams, period.matchUp[2].Home, LeagueSchedule.indexOf(period)+1)}</td>
                            </tr>  
                        </tbody>
                    </table>
                </div></div>
            ))}
        </div>
    );
}

export default Schedule;