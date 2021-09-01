import {teams} from "./Teams";

const getPrimaryColor = (id) => {
    let teamCall = [...teams].filter(team => team.profile.id === id);
    return teamCall[0].profile.primaryColor;
};

const getSecondaryColor = (id) => {
    let teamCall = [...teams].filter(team => team.profile.id === id);
    return teamCall[0].profile.secondaryColor;
};

export {getPrimaryColor, getSecondaryColor}