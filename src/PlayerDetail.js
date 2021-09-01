import React from 'react';
import './App.css';
import Players from './Player';
import {teams} from './Teams';
import {Link} from 'react-router-dom';


function PlayerDetail({match}) {
    const playerId = match.params.id;
    const OurPlayer = [...Players].filter(player => (player.profile.id === Number(playerId)));
    const playerProf = OurPlayer[0];
    const gamesLogged = playerProf.stats.gameLog;
    const playedGames = [...gamesLogged].filter(game => (game.day > 0));
    const playersTeam = teams.filter(team => (team.profile.name === playerProf.profile.team)); 
    const pitcherMan = playerProf.profile.posGroup === "SP" || playerProf.profile.posGroup ==="RP";
    const hideCol = pitcherMan ? {display: "none"} : {visibility: "visible" };
    const hideTotCol = pitcherMan ? {display: "none"} : {visibility: "visible", background: "#64A5FB"};
    const colCount = pitcherMan ? "3" : "4";
    return (
        <>
            <h1>{playerProf.profile.name}<img src={playersTeam[0].profile.logo} alt={`${playersTeam[0].profile.name} logo`} className="logo-medium"/></h1>
            <h2>{playerProf.profile.pos} &middot; <Link to={`/Team/${playerProf.profile.team}`} className="linkStyle">{playerProf.profile.team}</Link> &middot; {playerProf.profile.MLBteamAbbrev}</h2>
            <table className="mainLine">
                <thead>
                    <tr>
                        <th colSpan={colCount}>{playerProf.profile.name}'s Statistics</th>
                    </tr>
                    <tr>
                        <th>P</th>
                        <th>LOG</th>
                        <th>OP</th>
                        <th style={hideCol}>LT</th>
                    </tr>
                </thead>
                <tbody>
                    {playedGames.map(game => (
                        <tr key={playerProf.stats.gameLog.indexOf(game)}>
                            <td>{playerProf.stats.gameLog.indexOf(game)+1}</td>
                            <td>{game.line}</td>
                            <td>{game.OP}</td>
                            <td style={hideCol}>{game.OPPF}</td>
                        </tr>
                    ))}
                    <tr>
                        <td style={{background: "#64A5FB"}}>{playerProf.stats.games}</td>
                        <td style={{background: "#64A5FB"}}>AVERAGE OP: {playerProf.stats.AVG}</td>
                        <td style={{background: "#64A5FB"}}>{playerProf.stats.TotalOP}</td>
                        <td style={hideTotCol}>{playerProf.stats.OPdiff}</td>
                    </tr>
                </tbody>
            </table>
            {console.log(playersTeam[0].profile.logo)}
        </>
    )
}

export default PlayerDetail;