import Players from "./Player";

let hitters = [];
let pitchers = [];
let injuredHitters = [];
let injuredPitchers = [];
let reservedHitters =[];
let reservedPitchers= [];

hitters = [...Players].filter(player => (
        player.profile.posGroup === "IF" || player.profile.posGroup === "OF"
));

pitchers = [...Players].filter(player => (
        player.profile.posGroup === "SP" || player.profile.posGroup === "RP"
    ));

injuredHitters =[...hitters].filter(player => (
        player.profile.activity === "injured"
    ));

injuredPitchers =[...pitchers].filter(player => (
        player.profile.activity === "injured"
    ));

reservedHitters =[...hitters].filter(player => (
        player.profile.activity === "reserved"
));

reservedPitchers =[...pitchers].filter(player => (
        player.profile.activity === "reserved"
    ));    

export {injuredHitters, injuredPitchers, reservedHitters, reservedPitchers};