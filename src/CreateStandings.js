import {teams} from "./Teams";



//const CreateStandings = [...teams].sort((a,b) => (a.record.wins < b.record.wins) ? 1 : (a.record.wins === b.record.wins) ? ((a.record.tiebreak[b] > b.record.tiebreak[a]) ? 1 : (a.record.tiebreak[b] === b.record.tiebreak[a]) ? ((a.stats.totalOP < b.stats.totalOP) ? 1 : -1): -1): -1);
const CreateStandings = [...teams].sort((a,b) =>
    (a.record.wins > b.record.wins) ? -1 : (
        (a.record.wins === b.record.wins) ? (
            (a.record.tiebreak[b] > b.record.tiebreak[a]) ? -1 : (
                (a.stats.totalOP > b.stats.totalOP) ? -1 : 1)
                )
            : 1)
        );
export default CreateStandings;