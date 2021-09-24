import {teams} from "./Teams";

function compareFunction(a,b) {
    if (a.record.wins > b.record.wins) {
        return -1
    };
    if (a.record.wins < b.record.wins) {
        return 1
    };
    if (a.record.wins === b.record.wins) {
        if (a.record.tiebreak[b.profile.id] > b.record.tiebreak[a.profile.id]) {
            return -1
        };
        if (a.record.tiebreak[b.profile.id] < b.record.tiebreak[a.profile.id]) {
            return 1;
        };
        if (a.record.tiebreak[b.profile.id] === b.record.tiebreak[a.profile.id]) {
            if (a.stats.totalOP > b.stats.totalOP) {
                return -1;
            };
            if (a.stats.totalOP < b.stats.totalOP) {
                return 1;
            }
        }
    }
}

//const CreateStandings = [...teams].sort((a,b) => (a.record.wins < b.record.wins) ? 1 : (a.record.wins === b.record.wins) ? ((a.record.tiebreak[b] > b.record.tiebreak[a]) ? 1 : (a.record.tiebreak[b] === b.record.tiebreak[a]) ? ((a.stats.totalOP < b.stats.totalOP) ? 1 : -1): -1): -1);
const CreateStandings = [...teams].sort(compareFunction(a,b));
export default CreateStandings;