const getPitchFactor = (OPsum) => {
    let PitchingFactor;
    switch(true) {
        case OPsum === 20:
            PitchingFactor = 4;
            break;
        case OPsum > 14:
            PitchingFactor = 3;
            break;
        case OPsum > 9:
            PitchingFactor = 2;
            break;
        case OPsum > 4:
            PitchingFactor = 1;
            break;
        default:
            PitchingFactor = 0;
            break;
    }
    return PitchingFactor;
};

const getOPSum = (playerArray, period) => {
    if (!playerArray) {return 0};
    let sum = 0;
    playerArray.map(player => {
        player.stats.gameLog.map(game => {
            if (game.SP === period) {
                sum = sum + game.OP;
            }
            return false;
        })
        return false;
    })
    return sum;
};

const getLTSum = (playerArray, period) => {
    if (!playerArray) {return 0};
    let sum = 0;
    playerArray.map(player => {
        player.stats.gameLog.map(game => {
            if (game.SP === period) {
                sum = sum + game.OPPF;
            }
            return false;
        })
        return false;
    })
    return sum;
};




export {getPitchFactor, getOPSum, getLTSum};