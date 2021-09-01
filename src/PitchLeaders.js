import Players from "./Player";

const Leaders = [...Players].filter(player => (player.stats.games > 5));
const PitchingLeaders = [...Leaders].filter(player => (player.profile.posGroup === "SP"));
const ReliefPitchingLeaders = [...Leaders].filter(player => (player.profile.posGroup === "RP"));

const PitchLeaderBoard = [...PitchingLeaders].sort((a,b) => (a.stats.AVG < b.stats.AVG) ? 1 : (a.stats.AVG === b.stats.AVG) ? ((a.stats.TotalOP < b.stats.TotalOP) ? 1: -1): -1);
const ReliefPitchLeaderBoard = [...ReliefPitchingLeaders].sort((a,b) => (a.stats.AVG < b.stats.AVG) ? 1 : (a.stats.AVG === b.stats.AVG) ? ((a.stats.TotalOP < b.stats.TotalOP) ? 1: -1): -1);

export {PitchLeaderBoard, ReliefPitchLeaderBoard};