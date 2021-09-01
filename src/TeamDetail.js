import React from 'react';
import './App.css';
import {teams} from './Teams';
import CreateStandings from './CreateStandings';
import findPlace from './findPlace';
import {Link} from 'react-router-dom';
import {injuredHitters, injuredPitchers, reservedHitters, reservedPitchers} from "./injRes";

function TeamPage({match}) {
    console.log(match)
    const OurTeam = [...teams].filter(team => (team.profile.name === match.params.name))
    const TeamProf = OurTeam[0]
    const spot = [...CreateStandings].indexOf(TeamProf) + 1;
    const place = findPlace(spot);
    const OurInjuredHitters = [...injuredHitters].filter(player => (player.profile.team === TeamProf.profile.name));
    const OurInjuredPitchers =[...injuredPitchers].filter(player => (player.profile.team === TeamProf.profile.name));
    const OurReserveHitters =[...reservedHitters].filter(player => (player.profile.team === TeamProf.profile.name));
    const OurReservePitchers=[...reservedPitchers].filter(player => (player.profile.team === TeamProf.profile.name));
    let winOrloss = []
    TeamProf.record.winLoss.map(sp => {
        if (sp) {
            winOrloss.push("W")
        } else {
            winOrloss.push("L")
        };
        return false;
    })

    return (
        <div>
            <img src={TeamProf.profile.logo} alt={`${TeamProf.profile.name} logo`} className="logo-large"/>
            <h1>{TeamProf.profile.name}</h1>
            <p>{place} &middot; {TeamProf.record.wins}-{TeamProf.record.loss}</p>
            <p>Recent: {winOrloss.join('')}</p>
            <h2>Roster</h2>
            <table className="mainLine"  style={{width: "42rem"}}>
                <thead>
                    <tr>
                        <th colSpan="7" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Infield</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Total LT</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {TeamProf.playerList.hitters.inField.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.OPdiff}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="mainLine"  style={{width: "42rem", marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th colSpan="7" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Outfield</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Total LT</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {TeamProf.playerList.hitters.outField.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.OPdiff}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="mainLine"  style={{width: "42rem", marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th colSpan="7" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Injured</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Total LT</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {OurInjuredHitters.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.OPdiff}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="mainLine"  style={{width: "42rem"}}>
                <thead>
                    <tr>
                        <th colSpan="7" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Reserved</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Total LT</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {OurReserveHitters.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.OPdiff}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="mainLine" style={{width: "42rem", marginTop: "3rem"}}>
                <thead>
                    <tr>
                        <th colSpan="6" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Starting Pitching</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {TeamProf.playerList.pitchers.startingPitcher.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="mainLine" style={{width: "42rem", marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th colSpan="6" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Relief Pitching</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {TeamProf.playerList.pitchers.reliefPitcher.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="mainLine" style={{width: "42rem", marginTop: "1rem"}}>
                <thead>
                    <tr>
                        <th colSpan="6" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Injured</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {OurInjuredPitchers.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="mainLine" style={{width: "42rem"}}>
                <thead>
                    <tr>
                        <th colSpan="6" style={{background: "navy", color: "white", borderRadius: ".8rem"}}><h4 style={{padding: "0", margin: "0"}}>Reserved</h4></th>
                    </tr>
                    <tr>
                        <th>Player</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>Games</th>
                        <th>Total OP</th>
                        <th>Average OP</th>
                    </tr>
                </thead>
                <tbody>
                    {OurReservePitchers.map(player => (
                        <tr key={player.profile.id}>
                            <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                            <td>{player.profile.MLBteamAbbrev}</td>
                            <td>{player.profile.pos}</td>
                            <td>{player.stats.games}</td>
                            <td>{player.stats.TotalOP}</td>
                            <td>{player.stats.AVG}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TeamPage;