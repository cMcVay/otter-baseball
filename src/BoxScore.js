
import LeagueSchedule from "./LeagueSchedule";
import {teams, getName, getBatStats, getPitchStats, getLT, getOP, getPF} from "./Teams";
import {getPitchFactor, getOPSum} from "./StatCalculators";
import {getPrimaryColor, getSecondaryColor} from "./getColor";
import {getWeekLine, getPWeekLine} from "./getWeekLine";
import {Link} from "react-router-dom";
import './App.css';

const BoxScore = (period, teamA) => {
    let ScoringPeriod = [...LeagueSchedule][period-1];
    let MatchUps;
    if (teamA > -1) {
        MatchUps = ScoringPeriod.matchUp.filter(compare => (compare.Home === teamA || compare.Away === teamA));
    } else {
        MatchUps = ScoringPeriod.matchUp;
    }
    return (
        <>
            {console.log(teams)}
            <h3>Scoring Period {ScoringPeriod.week}</h3>
            {MatchUps.map(game => 
                <div key={`${game.Away}${game.Home}${period}`}>
                    <table className="mainLine">
                        <thead>
                            <tr>
                                <th></th>
                                <th>LT</th>
                                <th>OP</th>
                                <th>PF</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{background: `${getSecondaryColor(game.Away)}`}}><Link to={`/Team/${getName(teams, game.Away)}`} style={{textDecoration: "none", color: `${getPrimaryColor(game.Away)}`}}>{getName(teams, game.Away)}</Link></td>
                                <td>{getLT(teams, game.Away, period)}</td>
                                <td>{getOP(teams, game.Away, period)}</td>
                                <td>{getPF(teams, game.Away, period)}</td>
                            </tr>
                            <tr>
                                <td style={{background: `${getSecondaryColor(game.Home)}`}}><Link to={`/Team/${getName(teams, game.Home)}`} style={{textDecoration: "none", color: `${getPrimaryColor(game.Home)}`}}>{getName(teams, game.Home)}</Link></td>
                                <td>{getLT(teams, game.Home, period)}</td>
                                <td>{getOP(teams, game.Home, period)}</td>
                                <td>{getPF(teams, game.Home, period)}</td>
                            </tr> 
                        </tbody>
                    </table>
                    <div className="statBoxes">
                        <table className="statScore">
                            <thead>
                                <tr>
                                    <th colSpan="5">{getName(teams, game.Away)}</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <th>Day</th>
                                    <th>Game</th>
                                    <th>OP</th>
                                    <th>LT</th>
                                </tr>
                            </thead>
                            <tbody>
                                        {getBatStats(teams, game.Away, period).map(player => 
                                            <tr key={`${period+50}${game.Away}${getName(teams, game.Away)}${player.profile.id}`}>
                                                <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                                                {getWeekLine(player, period)}
                                            </tr>
                                        )}
                                        <tr className="secondHead">
                                            <td>Pitching</td>
                                        </tr>
                                        {getPitchStats(teams, game.Away, period).map(player => 
                                            <tr key={`${game.Away}${getName(teams, game.Away)}${period+50}${player.profile.id}`}>
                                                <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                                                {getPWeekLine(player, period)}
                                            </tr>
                                        )}
                                        <tr>
                                            <td colSpan="3"></td>
                                            <td>{getOPSum(getPitchStats(teams, game.Away, period), period)}</td>
                                            <td>{getPitchFactor(getOPSum(getPitchStats(teams, game.Away, period), period))} PF</td>
                                        </tr>
                            </tbody>
                        </table>
                        <table className="statScore">
                            <thead>
                                <tr>
                                    <th colSpan="5">{getName(teams, game.Home)}</th>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <th>Day</th>
                                    <th>Game</th>
                                    <th>OP</th>
                                    <th>LT</th>
                                </tr>
                            </thead>
                            <tbody>
                                        {getBatStats(teams, game.Home, period).map(player => 
                                            <tr key={`${game.Home}${getName(teams, game.Home)}${period+40}${player.profile.id}`}>
                                                <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                                                {getWeekLine(player, period)}
                                            </tr>
                                        )}
                                        <tr className="secondHead">
                                            <td>Pitching</td>
                                        </tr>
                                        {getPitchStats(teams, game.Home, period).map(player => 
                                            <tr key={`${period+40}${game.Home}${getName(teams, game.Home)}${player.profile.id}`}>
                                                <td><Link to={`/Player/${player.profile.id}`} className="linkStyle">{player.profile.name}</Link></td>
                                                {getPWeekLine(player, period)}
                                            </tr>
                                        )}
                                        <tr>
                                            <td colSpan="3"></td>
                                            <td>{getOPSum(getPitchStats(teams, game.Home, period), period)}</td>
                                            <td>{getPitchFactor(getOPSum(getPitchStats(teams, game.Home, period), period))} PF</td>
                                        </tr>
                            </tbody>
                        </table>
                    </div>       
                </div>
                )}
        </>
    )
};

export default BoxScore;