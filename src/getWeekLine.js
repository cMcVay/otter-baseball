const getWeekLine = (player, period) => {
    let gameLine = {};
    let thisWeek = [];
    thisWeek = player.stats.gameLog.filter(game => (game.SP === period))
    gameLine.day = thisWeek[0].day;
    gameLine.OP = thisWeek[0].OP;
    gameLine.line = thisWeek[0].line;
    gameLine.OPPF = thisWeek[0].OPPF
    return (
        <>
            <td>{gameLine.day}</td>
            <td>{gameLine.line}</td>
            <td>{gameLine.OP}</td>
            <td>{gameLine.OPPF}</td>
        </>
    );
}

const getPWeekLine = (player, period) => {
    let gameLine = {};
    let thisWeek = [];
    thisWeek = player.stats.gameLog.filter(game => (game.SP === period))
    gameLine.day = thisWeek[0].day;
    gameLine.OP = thisWeek[0].OP;
    gameLine.line = thisWeek[0].line;
    return (
        <>
            <td>{gameLine.day}</td>
            <td>{gameLine.line}</td>
            <td>{gameLine.OP}</td>
        </>
    );  
}

export {getWeekLine, getPWeekLine};