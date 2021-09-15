import Players from "./Player";

const Leaders = [...Players].filter(player => (player.stats.games > 9));
const HittingLeaders = [...Leaders].filter(player => (player.profile.posGroup !== "SP" && player.profile.posGroup !== "RP"));

const HitLeaderBoard = [...HittingLeaders].sort((a,b) => (a.stats.AVG < b.stats.AVG) ? 1 : (a.stats.AVG === b.stats.AVG) ? ((a.stats.TotalOP < b.stats.TotalOP) ? 1: (a.stats.TotalOP === b.stats.TotalOP) ? ((a.stats.OPdiff < b.stats.OPdiff) ? 1 : -1): -1): -1);

export default HitLeaderBoard;