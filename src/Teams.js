import Players from "./Player";
import LunarDoodles from "./Lunar Doodles Logo.png";
import FrozenAcorns from "./Frozen Acorns Logo.png";
import MagicManatees from "./Magic Manatees Logo.png";
import MightyMegabytes from "./Mighty Megabytes Logo.png";
import CrazyCormorants from "./Crazy Cormorants Logo.png";
import SlimAliens from "./Slim Aliens Logo.png";

const rawTeams = [
    {
        profile: {
            name: "Magic Manatees",
            abbrev: "MT",
            logo: MagicManatees,
            primaryColor: "#8F0606",
            secondaryColor: "#6EFFB6",
            id: 0
        },
        stats: {
            opPerWeek: [12, 14, 11, 8, 10, 11, 10, 5, 14, 12, 15, 13, 13, 13, 20, 9],
            pfPerWeek: [1, 1, 2, 1, 2, 3, 3, 2, 1, 2, 2, 3, 2, 2, 2, 2],
            opponentPerWeek: [1],
            oppfPerWeek: [6, 3, 6, 1, 2, 2, 2, 2, 3, 6, 15, 7, 2, 2, 8, 0],
            totalOP: 383
        },
        playerList: {
            hitters: {
                inField: [],
                outField: []
            },
            pitchers: {
               startingPitcher: [],
                reliefPitcher: [] 
            } 
        },
        record: {
            winLoss: [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0],
            wins: 10,
            loss: 6,
            tiebreak: [0, 4, 2, 1, 3, 0]
        }
    },
    {
        profile: {
            name: "Mighty Megabytes",
            abbrev: "MB",
            logo: MightyMegabytes,
            primaryColor: "darkorange",
            secondaryColor: "teal",
            id: 1
        },
        stats: {
            opPerWeek: [9, 10, 10, 15, 10, 12, 10, 15, 13, 9, 18, 14, 13, 15, 14, 17],
            pfPerWeek: [1, 2, 2, 2, 2, 2, 1, 0, 2, 1, 0, 1, 3, 2, 2, 3],
            opponentPerWeek: [0],
            oppfPerWeek: [4, 2, 4, 9, 1, 0, 4, 10, 8, 2, 7, 3, 1, 5, 5, 2],
            totalOP: 366
        },
        playerList: {
            hitters: {
                inField: [],
                outField: []
            },
            pitchers: {
               startingPitcher: [],
                reliefPitcher: [] 
            } 
        },
        record: {
            winLoss: [0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
            wins: 8,
            loss: 8,
            tiebreak: [0, 0, 2, 2, 1, 3]
        }
    },
    {
        profile: {
            name: "Crazy Cormorants",
            abbrev: "CC",
            logo: CrazyCormorants,
            primaryColor: "navy",
            secondaryColor: "lavender",
            id: 2
        },
        stats: {
            opPerWeek: [12, 16, 12, 13, 8, 12, 17, 12, 9, 13, 9, 17, 14, 16, 17, 13],
            pfPerWeek: [2, 3, 3, 1, 2, 2, 2, 3, 1, 1, 1, 2, 1, 2, 1, 2],
            opponentPerWeek: [3],
            oppfPerWeek: [7, 5, 3, 3, 0, 2, 11, 4, 1, 3, 5, 11, 3, 4, 6, 3],
            totalOP: 396
        },
        playerList: {
            hitters: {
                inField: [],
                outField: []
            },
            pitchers: {
               startingPitcher: [],
                reliefPitcher: [] 
            } 
        },
        record: {
            winLoss: [1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0],
            wins: 8,
            loss: 8,
            tiebreak: [1, 1, 0, 2, 2, 2]
        }
    },
    {
        profile: {
            name: "Slim Aliens",
            abbrev: "SA",
            logo: SlimAliens,
            primaryColor: "black",
            secondaryColor: "limegreen",
            id: 3
        },
        stats: {
            opPerWeek: [9, 5, 11, 13, 12, 19, 5, 14, 8, 12, 9, 18, 14, 17, 16, 10],
            pfPerWeek: [1, 2, 2, 2, 1, 3, 1, 1, 2, 2, 2, 3, 2, 2, 2, 3],
            opponentPerWeek: [2],
            oppfPerWeek: [1, 2, 1, 5, 1, 8, 1, 4, 3, 7, 0, 1, 8, 4, 5, 0],
            totalOP: 374
        },
        playerList: {
            hitters: {
                inField: [],
                outField: []
            },
            pitchers: {
               startingPitcher: [],
                reliefPitcher: [] 
            } 
        },
        record: {
            winLoss: [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
            wins: 8,
            loss: 8,
            tiebreak: [1, 1, 2, 0, 3, 1]
        }
    },
    {
        profile: {
            name: "Lunar Doodles",
            abbrev: "LD",
            logo: LunarDoodles,
            primaryColor: "black",
            secondaryColor: "#EFD97F",
            id: 4
        },
        stats: {
            opPerWeek: [8, 9, 10, 15, 14, 10, 11, 14, 10, 12, 18, 16, 18, 13, 11, 12],
            pfPerWeek: [1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 3, 1, 3, 3, 2, 2],
            opponentPerWeek: [5],
            oppfPerWeek: [0, 1, 2, 3, 5, 0, 0, 1, 0, 6, 7, 1, 2, 3, 5, 3],
            totalOP: 384
        },
        playerList: {
            hitters: {
                inField: [],
                outField: []
            },
            pitchers: {
               startingPitcher: [],
                reliefPitcher: [] 
            } 
        },
        record: {
            winLoss: [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1],
            wins: 5,
            loss: 11,
            tiebreak: [1, 2, 0, 1, 0, 1]
        }
    },
    {
        profile: {
            name: "Frozen Acorns",
            abbrev: "FA",
            logo: FrozenAcorns,
            primaryColor: "deeppink",
            secondaryColor: "#B7FBF8",
            id: 5
        },
        stats: {
            opPerWeek: [7, 10, 11, 12, 14, 9, 12, 9, 14, 12, 21, 18, 16, 13, 16, 16],
            pfPerWeek: [2, 2, 1, 2, 3, 2, 1, 1, 2, 1, 1, 4, 2, 2, 2, 2],
            opponentPerWeek: [4],
            oppfPerWeek: [3, 1, 2, 8, 8, 4, 2, 9, 8, 2, 13, 3, 5, 2, 4, 4],
            totalOP: 391
        },
        playerList: {
            hitters: {
                inField: [],
                outField: []
            },
            pitchers: {
               startingPitcher: [],
                reliefPitcher: [] 
            } 
        },
        record: {
            winLoss: [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1],
            wins: 9,
            loss: 7,
            tiebreak: [3, 0, 2, 2, 2, 0]
        }
    },
];

const addRosters = (array, players) => {
    const newArray = [...array].map(club => {
        const thisTeam = [...players].filter(player => (player.profile.team === club.profile.name));
        const thisTeamHitters = [...thisTeam].filter(player => (player.profile.posGroup === "IF" || player.profile.posGroup === "OF"));
        const thisTeamPitchers = [...thisTeam].filter(player => (player.profile.posGroup === "SP" || player.profile.posGroup === "RP"))
        club.playerList.hitters.inField = thisTeam.filter(player => (player.profile.activity === "active" && player.profile.posGroup === "IF"));
        club.playerList.hitters.outField = thisTeam.filter(player => (player.profile.activity === "active" && player.profile.posGroup === "OF"));
        club.playerList.pitchers.startingPitcher = thisTeam.filter(player => (player.profile.activity === "active" && player.profile.posGroup === "SP"));
        club.playerList.pitchers.reliefPitcher = thisTeam.filter(player => (player.profile.activity === "active" && player.profile.posGroup === "RP"));
        club.playerList.hitters.injured = thisTeamHitters.filter(player => (player.profile.activity === "injured"));
        club.playerList.hitters.reserved = thisTeamHitters.filter(player => (player.profile.activity === "reserved"));
        club.playerList.pitchers.injured = thisTeamPitchers.filter(player => (player.profile.activity === "injured"));
        club.playerList.pitchers.reserved = thisTeamPitchers.filter(player => (player.profile.activity === "reserved"));
        
        return club;
})
    return newArray;
}
const teams = addRosters(rawTeams, Players);

const getName = (teams, id) => {
    let teamCall = [...teams].filter(team => team.profile.id === id);
    return teamCall[0].profile.name;
}

const getBatStats = (teams, id, week) => {
    const teamCall = [...teams].filter(team => (team.profile.id === id));
    const BatStats = [];
    teamCall[0].playerList.hitters.inField.map(player => {
      if (player.stats.gameLog.some(game => game.SP === week)) {
        return BatStats.push(player);
      };
      return false;
    });
    teamCall[0].playerList.hitters.outField.map(player => {
      if (player.stats.gameLog.some(game => game.SP === week)) {
        return BatStats.push(player);
      };
      return false;
    });
    teamCall[0].playerList.hitters.injured.map(player => {
        if (player.stats.gameLog.some(game => game.SP === week)) {
          return BatStats.push(player);
        };
        return false;
      });
      teamCall[0].playerList.hitters.reserved.map(player => {
        if (player.stats.gameLog.some(game => game.SP === week)) {
          return BatStats.push(player);
        };
        return false;
      });
    return BatStats;
}
const getPitchStats = (teams, id, week) => {
    const teamCall = [...teams].filter(team => (team.profile.id === id));
    const PitchStats = [];
    teamCall[0].playerList.pitchers.startingPitcher.map(player => {
      if (player.stats.gameLog.some(game => game.SP === week)) {
        return PitchStats.push(player);
      };
      return false;
    });
    teamCall[0].playerList.pitchers.reliefPitcher.map(player => {
      if (player.stats.gameLog.some(game => game.SP === week)) {
        return PitchStats.push(player);
      };
      return false;
    });
    teamCall[0].playerList.pitchers.injured.map(player => {
        if (player.stats.gameLog.some(game => game.SP === week)) {
          return PitchStats.push(player);
        };
        return false;
      });
      teamCall[0].playerList.pitchers.reserved.map(player => {
        if (player.stats.gameLog.some(game => game.SP === week)) {
          return PitchStats.push(player);
        };
        return false;
      });
    return PitchStats;
}


const getLT = (teams, id, week) => {
    let teamCall = [...teams].filter(team => team.profile.id === id);
    return teamCall[0].stats.oppfPerWeek[week-1];
}

const getOP = (teams, id, week) => {
    let teamCall = [...teams].filter(team => team.profile.id === id);
    return teamCall[0].stats.opPerWeek[week-1];
}

const getPF = (teams, id, week) => {
    let teamCall = [...teams].filter(team => team.profile.id === id);
    return teamCall[0].stats.pfPerWeek[week-1];
}

export {teams, getName, getBatStats, getPitchStats, getLT, getOP, getPF};