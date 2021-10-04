import './App.css';
import React from 'react';
import CreateStandings from './CreateStandings'
import HitLeaderBoard from './HitLeaders';
import {ReliefPitchLeaderBoard, PitchLeaderBoard} from './PitchLeaders';
import {Link} from 'react-router-dom';



function Standings() {

    const widenStyle = {
        width: 30
    }

    const leaderWins = CreateStandings[0].record.wins;

    const gamesBack = (wins) => {return (leaderWins - wins)}

    return (
        <div className="App">
            <h1>Standings</h1>
            <table className="mainLine">
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>W</th>
                        <th>L</th>
                        <th>GB</th>
                    </tr>
                </thead>
                <tbody>
                    {CreateStandings.map(team => (
                        <tr key={team.profile.id}>
                            <td style={{width: 300, textAlign: "left"}}><Link to={`/Team/${team.profile.name}`} className="linkStyle"><img src={team.profile.logo} alt={`${team.profile.name} logo`} className="logo-small"/>{team.profile.name}</Link></td>
                            <td style={widenStyle}>{team.record.wins}</td>
                            <td style={widenStyle}>{team.record.loss}</td>
                            <td style={widenStyle}>{gamesBack(team.record.wins)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>League Leaders</h2>
            <h3>Hitting</h3>
            <table className="mainLine">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>TM</th>
                        <th>AVG</th>
                        <th>OP</th>
                        <th>LT</th>
                    </tr>
                </thead>
                <tbody>
                    {HitLeaderBoard.slice(0,10).map(player => (
                        <tr key={player.profile.id}>
                            <td>{HitLeaderBoard.indexOf(player)+1}</td>
                            <td style={{width: 300}}><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td style={widenStyle}>{player.profile.teamAbbrev}</td>
                            <td style={widenStyle}>{player.stats.AVG}</td>
                            <td style={widenStyle}>{player.stats.TotalOP}</td>
                            <td style={widenStyle}>{player.stats.OPdiff}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>Pitching</h3>      
            <h4>Starters</h4>
            <table className="mainLine">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>TM</th>
                        <th>AVG</th>
                        <th>OP</th>
                    </tr>
                </thead>
                <tbody>
                    {PitchLeaderBoard.slice(0,10).map(player => (
                        <tr key={player.profile.id}>
                            <td>{PitchLeaderBoard.indexOf(player) + 1}</td>
                            <td style={{width: 300}}><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td style={widenStyle}>{player.profile.teamAbbrev}</td>
                            <td style={widenStyle}>{player.stats.AVG}</td>
                            <td style={widenStyle}>{player.stats.TotalOP}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Relief</h4>
            <table className="mainLine">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>TM</th>
                        <th>AVG</th>
                        <th>OP</th>
                    </tr>
                </thead>
                <tbody>
                    {ReliefPitchLeaderBoard.slice(0,10).map(player => (
                        <tr key={player.profile.id}>
                            <td>{ReliefPitchLeaderBoard.indexOf(player) + 1}</td>
                            <td style={{width: 300}}><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td style={widenStyle}>{player.profile.teamAbbrev}</td>
                            <td style={widenStyle}>{player.stats.AVG}</td>
                            <td style={widenStyle}>{player.stats.TotalOP}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Standings;