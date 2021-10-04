import {teams} from "./Teams";

const getNum = (x, y) => {
    let initials = y.profile.abbrev;
    console.log(x.record[initials]);
    return x.record[initials];
};

//const CreateStandings = [...teams].sort((a,b) => (a.record.wins < b.record.wins) ? 1 : (a.record.wins === b.record.wins) ? ((a.record.tiebreak[b] > b.record.tiebreak[a]) ? 1 : (a.record.tiebreak[b] === b.record.tiebreak[a]) ? ((a.stats.totalOP < b.stats.totalOP) ? 1 : -1): -1): -1);
const CreateStandings = [...teams].sort((a,b) =>
    (a.record.wins > b.record.wins) ? -1 : (
        (a.record.wins === b.record.wins) ? (
            (getNum(a, b) > getNum(b, a)) ? -1 : (
                ((getNum(a, b) === getNum(b, a)) ? ((a.stats.totalOP > b.stats.totalOP) ? -1 : 1)
                : 1)
            )
        ) : 1
    )
);
export default CreateStandings;