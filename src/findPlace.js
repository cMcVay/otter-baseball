const findPlace = (spot) => {
    switch(spot) {
        case 1:
            return "First Place";
        case 2:
            return "Second Place";
        case 3:
            return "Third Place";
        case 4:
            return "Fourth Place";
        case 5:
            return "Fifth Place";
        case 6:
            return "Sixth Place";
        default:
            break;
    }
}

export default findPlace;