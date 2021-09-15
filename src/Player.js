const rawPlayers = [
    {
        profile: {
            name: "Francisco Lindor",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "New York Mets",
            MLBteamAbbrev: "NYM",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 601
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, 2 BB",
                    day: 8,
                    OP: 0,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-4, 2 1B, BB",
                    day: 5,
                    OP: 0,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "3-4, 1 HR, 1 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "1-3, 3 BB, 1 K",
                    day: 9,
                    OP: 0,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-5, 1 HR, 2 RBI",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 5
                },
                {
                    line: "2-5, 1 2B, 1 RBI",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-5, 1 HR, 2 RBI, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-5, 1 2B, 1 HR, 1 RBI, 3 K",
                    day: 3,
                    OP: 0,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "3-4, 2 HR, 5 RBI",
                    day: 8,
                    OP: 5,
                    OPPF: 4,
                    SP: 9
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "2-3, 2 RBI, 1 BB, 1 SB",
                    day: 5,
                    OP: 2,
                    OPPF: 1,
                    SP: 11
                },
                {
                    line: "3-4, 1 HR, 2 RBI, 1 BB",
                    day: 3,
                    OP: 3,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "3-4, 1 HR, 4 RBI",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 17
                },
                {
                    line: "3-4, 3 HR, 5 RBI, 1 BB",
                    day: 7,
                    OP: 5,
                    OPPF: 3,
                    SP: 18
                }
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 12
        }
    },
    {
        profile: {
            name: "Rafael Devers",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "Boston Red Sox",
            MLBteamAbbrev: "BOS",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 602
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, 1 HR, 2 RBI, BB, K",
                    day: 8,
                    OP: 2,
                    OPPF: 1,
                    SP: 1
                },
                {
                    line: "2-5, 2 HR, 5 RBI, BB, 2 K",
                    day: 2,
                    OP: 4,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "2-5, 1 HR, 1 RBI, 1 SB",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 1 BB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 1,
                    SP: 5
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 BB, 2 K",
                    day: 6,
                    OP: 2,
                    OPPF: 1,
                    SP: 6
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-4, 1 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "3-5, 1 2B, 1 HR, 4 RBI, 2 K",
                    day: 4,
                    OP: 3,
                    OPPF: 2,
                    SP: 9
                },
                {
                    line: "3-4, 1 HR, 4 RBI",
                    day: 7,
                    OP: 3,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "3-5, 1 HR, 5 RBI",
                    day: 2,
                    OP: 4,
                    OPPF: 3,
                    SP: 11
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 2 BB, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-4, 2 HR, 5 RBI, 2 K",
                    day: 1,
                    OP: 3,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "2-3, 1 HR, 4 RBI, 1 BB, 1 K",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "2-5, 1 HR, 3 RBI, 1 SB",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 16
                },
                {
                    line: "2-5, 2 HR, 2 RBI",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 17
                }
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 14
        }
    },
    {
        profile: {
            name: "Anthony Rendon",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "Los Angeles Angels",
            MLBteamAbbrev: "LAA",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 603
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, 1 RBI, BB, K",
                    day: 5,
                    OP: 0,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-4, 1B, HR, RBI, K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "3-5, 1 2B, 1 HR, 4 RBI",
                    day: 4,
                    OP: 4,
                    OPPF: 3,
                    SP: 4
                }
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 3
        }
    },
    {
        profile: {
            name: "Yordan Alvarez",
            pos: "DH",
            posGroup: "OF",
            MLBteam: "Houston Astros",
            MLBteamAbbrev: "HOU",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 604
        },
        stats: {
            gameLog: [
                {
                    line: "3-5, HR, 3 RBI",
                    day: 3,
                    OP: 3,
                    OPPF: 2,
                    SP: 1
                },
                {
                    line: "2-4, 1 3B, 4 RBI, 1 BB, 1 K",
                    day: 6,
                    OP: 3,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "3-4, 2 HR, 2 RBI, 1 K",
                    day: 9,
                    OP: 3,
                    OPPF: 2,
                    SP: 4
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 2,
                    OPPF: 1,
                    SP: 5
                },
                {
                    line: "1-4, 1 2B, 2 RBI, 2 K",
                    day: 3,
                    OP: 0,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-4, 1 2B, 1 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB",
                    day: 6,
                    OP: 2,
                    OPPF: 2,
                    SP: 8
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 SB",
                    day: 2,
                    OP: 2,
                    OPPF: 1,
                    SP: 9
                },
                {
                    line: "2-6, 1 HR, 5 RBI, 1 K",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "3-3, 2 HR, 5 RBI, 1 BB",
                    day: 7,
                    OP: 5,
                    OPPF: 4,
                    SP: 11
                },
                {
                    line: "2-3, 1 2B, 1 HR, 2 RBI, 1 BB",
                    day: 7,
                    OP: 3,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "3-5, 1 HR, 3 RBI",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "3-5, 2 2B, 2 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-5, 1 2B, 1 HR, 4 RBI",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 16
                },
                {
                    line: "2-5, 2 HR, 3 RBI, 1 BB",
                    day: 8,
                    OP: 4,
                    OPPF: 2,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 13
        }
    },
    {
        profile: {
            name: "Kyle Tucker",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Houston Astros",
            MLBteamAbbrev: "HOU",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 605
        },
        stats: {
            gameLog: [
                {
                    line: "1-5, 3 RBI",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "1-4 HR, 1 RBI, K",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-5, 1 HR, 2 RBI, 1 K",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "0-2, 3 BB",
                    day: 3,
                    OP: 0,
                    OPPF: 0,
                    SP: 4
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 2
        }
    },
    {
        profile: {
            name: "Austin Meadows",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Tampa Bay Rays",
            MLBteamAbbrev: "TB",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 606
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, HR, BB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "3-5, 1 2B, 1 HR, 2 RBI",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "2-5, 2 HR, 5 RBI, 1 K",
                    day: 7,
                    OP: 4,
                    OPPF: 3,
                    SP: 4
                },
                {
                    line: "3-5, 2 2B, 1 HR, 4 RBI, 2 K",
                    day: 7,
                    OP: 3,
                    OPPF: 2,
                    SP: 5
                },
                {
                    line: "2-5, 1 2B, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 3,
                    OPPF: 2,
                    SP: 6
                },
                {
                    line: "2-4, 1 3B, 1 HR, 4 RBI, 1 K",
                    day: 3,
                    OP: 3,
                    OPPF: 1,
                    SP: 7
                },
                {
                    line: "2-5, 1 2B, 1 HR, 5 RBI",
                    day: 1,
                    OP: 4,
                    OPPF: 4,
                    SP: 8
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 2 BB, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "3-4, 3 2B, 2 RBI",
                    day: 5,
                    OP: 3,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "3-5, 2 HR, 5 RBI, 1 K",
                    day: 7,
                    OP: 4,
                    OPPF: 2,
                    SP: 13
                },
                {
                    line: "1-4, 1 HR, 1 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Gerrit Cole",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "New York Yankees",
            MLBteamAbbrev: "NYY",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 607
        },
        stats: {
            gameLog: [
                {
                    line: "7 IP, 4 H, 0 ER, 13 K, 0 BB",
                    day: 6,
                    OP: 8,
                    SP: 1
                },
                {
                    line: "6.1 IP, 5 H, 2 ER, 10 K, 0 BB ",
                    day: 9,
                    OP: 4,
                    SP: 2
                },
                {
                    line: "7.0 IP, 3 H, 1 ER, 11 K, 0 BB",
                    day: 6,
                    OP: 6,
                    SP: 3
                },
                {
                    line: "6 IP, 4 H, 0 ER, 0 BB, 12 K",
                    day: 3,
                    OP: 6,
                    SP: 4
                },
                {
                    line: "8 IP, 4 H, 0 ER, 0 BB, 12 K",
                    day: 6,
                    OP: 10,
                    SP: 5
                },
                {
                    line: "7 IP, 4 H, 0 ER, 3 BB, 7 K",
                    day: 7,
                    OP: 5,
                    SP: 6
                },
                {
                    line: "6 IP, 6 H, 1 ER, 1 BB, 5 K",
                    day: 4,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "6 IP, 5 H, 2 ER, 0 BB, 9 K",
                    day: 7,
                    OP: 4,
                    SP: 8
                },
                {
                    line: "8 IP, 4 H, 2 ER, 1 BB, 4 K",
                    day: 5,
                    OP: 5,
                    SP: 9
                },
                {
                    line: "7 IP, 3 H, 2 ER, 3 BB, 6 K",
                    day: 2,
                    OP: 4,
                    SP: 10
                },
                {
                    line: "3.1 IP, 6 H, 4 ER, 3 BB, 6 K",
                    day: 5,
                    OP: 0,
                    SP: 11
                },
                {
                    line: "9 IP, 3 H, 0 ER, 2 BB, 12 K",
                    day: 2,
                    OP: 10,
                    SP: 12
                },
                {
                    line: "9 IP, 3 H, 0 ER, 2 BB, 12 K",
                    day: 2,
                    OP: 10,
                    SP: 12
                },
                {
                    line: "5.2 IP, 2 H, 1 ER, 1 BB, 9 K",
                    day: 7,
                    OP: 4,
                    SP: 15
                },
                {
                    line: "7 IP, 4 H, 1 ER, 0 BB, 15 K",
                    day: 5,
                    OP: 8,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 2
        }
    },
    {
        profile: {
            name: "Edwin Diaz",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "New York Mets",
            MLBteamAbbrev: "NYM",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 608
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, BB, K",
                    day: 8,
                    OP: 0,
                    SP: 1
                },
                {
                    line: "1 IP, 3 K, SV",
                    day: 8,
                    OP: 5,
                    SP: 2
                },
                {
                    line: "1.1 IP, 2 H, 1 BB, 1 K",
                    day: 4,
                    OP: 0,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 4
                },
                {
                    line: "1.2 IP, 1 H, 0 ER, 0 BB, 3 K, SV",
                    day: 3,
                    OP: 5,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 3 K, SV",
                    day: 1,
                    OP: 4,
                    SP: 7
                },
                {
                    line: "1.1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 9,
                    OP: 5,
                    SP: 8
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 3,
                    OP: 5,
                    SP: 9
                },
                {
                    line: "1.2 IP, 0 H, 0 ER, 1 BB, 2 K, SV",
                    day: 3,
                    OP: 5,
                    SP: 10
                },
                {
                    line: "1 IP, 2 H, 1 ER, 1 BB, 2 K, SV",
                    day: 6,
                    OP: 1,
                    SP: 11
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 2,
                    OP: 5,
                    SP: 12
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 4,
                    OP: 5,
                    SP: 13
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 1,
                    OP: 3,
                    SP: 15
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 3 K",
                    day: 9,
                    OP: 0,
                    SP: 16
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 17
                },
                {
                    line: "1 IP, 1 H, 0 ER, 1 BB, 2 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 2
        }
    },
    {
        profile: {
            name: "Rafael Montero",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Texas Rangers",
            MLBteamAbbrev: "TEX",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 609
        },
        stats: {
            gameLog: [
                {
                    line: "1.1 IP, K, SV",
                    day: 3,
                    OP: 4,
                    SP: 1
                },
                {
                    line: "1.0 IP, SV",
                    day: 2,
                    OP: 3,
                    SP: 2
                },
                {
                    line: "1.0 IP, BB, SV",
                    day: 1,
                    OP: 2,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 5,
                    OP: 3,
                    SP: 4
                },
                {
                    line: "0.1 IP, 0 H, 0 ER, 0 BB, 0 K, SV",
                    day: 8,
                    OP: 0,
                    SP: 5
                },
                {
                    line: "2 IP, 0 H, 0 ER, 0 BB, 1 K",
                    day: 4,
                    OP: 3,
                    SP: 6
                },
                {
                    line: "1 IP, 2 H, 0 ER, 0 BB, 0 K, SV",
                    day: 1,
                    OP: 2,
                    SP: 7
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K",
                    day: 1,
                    OP: 0,
                    SP: 8
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K",
                    day: 5,
                    OP: 0,
                    SP: 9
                },
                {
                    line: "1 IP, 3 H, 2 ER, 0 BB, 1 K",
                    day: 5,
                    OP: 0,
                    SP: 10
                },
                {
                    line: "2.2 IP, 1 H, 0 ER, 0 BB, 3 K",
                    day: 4,
                    OP: 5,
                    SP: 11
                },
                {
                    line: "2 IP, 1 H, 0 ER, 1 BB, 1 K",
                    day: 4,
                    OP: 3,
                    SP: 14
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 2
        }
    },
    {
        profile: {
            name: "Matt Olson",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "Oakland Athletics",
            MLBteamAbbrev: "OAK",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 610
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, 1 HR, 1 RBI, 2 BB",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "4-5, 1 2B, 2 RBI",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "4-5, 4 RBI",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Bo Bichette",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 611
        },
        stats: {
            gameLog: [
                {
                    line: "3-4, 1 HR, 2 RBI, 1 BB",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "2-3, 1 HR, 3 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Jared Walsh",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "Los Angeles Angels",
            MLBteamAbbrev: "LAA",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 612
        },
        stats: {
            gameLog: [
                {
                    line: "4-4, 1 2B, 1 HR, 2 RBI, 1 BB, 1 SB",
                    day: 4,
                    OP: 4,
                    OPPF: 3,
                    SP: 5
                },
                {
                    line: "3-4, 2 2B",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-4, 1 HR, 3 RBI",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-4, 1 HR, 1 RBI",
                    day: 1,
                    OP: 1,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "2-5, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 2,
                    OPPF: 1,
                    SP: 9
                },
                {
                    line: "2-5, 1 2B, 1 RBI, 1 BB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "2-5, 2 HR, 5 RBI",
                    day: 1,
                    OP: 4,
                    OPPF: 3,
                    SP: 11
                },
                {
                    line: "3-4, 1 2B, 2 RBI, 2 BB",
                    day: 1,
                    OP: 3,
                    OPPF: 1,
                    SP: 16
                },
                {
                    line: "3-3, 1 2B, 1 HR, 3 RBI, 1 BB",
                    day: 1,
                    OP: 4,
                    OPPF: 2,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "DJ LeMahieu",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "New York Yankees",
            MLBteamAbbrev: "NYY",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 613
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 2B, 1 BB",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-5, 1 2B, 2 RBI, 1 SB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-5, 1 2B, 1 RBI",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "3-5, 1 2B, 4 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Max Muncy",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 614
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2 HR, 4 RBI, 1 BB",
                    day: 6,
                    OP: 4,
                    OPPF: 2,
                    SP: 15
                },
                {
                    line: "2-3, 1 2B, 1 HR, 2 RBI, 1 BB",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Juan Soto",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Washington Nationals",
            MLBteamAbbrev: "WSN",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 615
        },
        stats: {
            gameLog: [
                {
                    line: "2-5, 2 HR, 3 RBI",
                    day: 1,
                    OP: 3,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 2 RBI, 1 BB",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "3-5, 1 HR, 1 RBI",
                    day: 4,
                    OP: 2,
                    OPPF: 1,
                    SP: 6
                },{
                    line: "3-4, 1 HR, 4 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 7
                },{
                    line: "2-4, 1 3B, 2 RBI, 1 BB, 2 K",
                    day: 4,
                    OP: 1,
                    OPPF: 1,
                    SP: 8
                },{
                    line: "2-4, 1 2B, 1 SB",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },{
                    line: "2-5, 2 2B, 2 RBI, 2 K",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },{
                    line: "2-3, 1 HR, 3 RBI, 2 BB",
                    day: 8,
                    OP: 3,
                    OPPF: 2,
                    SP: 11
                },{
                    line: "3-4, 1 2B, 2 HR, 5 RBI, 1 BB",
                    day: 7,
                    OP: 5,
                    OPPF: 2,
                    SP: 12
                },{
                    line: "2-4, 1 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },{
                    line: "2-3, 1 2B, 2 BB, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },{
                    line: "1-2, 1 HR, 3 RBI, 3 BB",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 2 BB",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "3-4, 1 HR, 4 RBI, 1 BB, 1 SB",
                    day: 6,
                    OP: 4,
                    OPPF: 2,
                    SP: 17
                },
                {
                    line: "2-3, 1 2B, 1 3B, 2 BB",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Trent Grisham",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 616
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1B, HR, 2 RBI, BB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "1-2, 1 3B, 2 RBI, 2 BB",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "3-4, 1 HR, 1 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Tyler Naquin",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Cincinnati Reds",
            MLBteamAbbrev: "CIN",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 617
        },
        stats: {
            gameLog: [
                {
                    line: "5-6, 1 2B, 4 RBI",
                    day: 7,
                    OP: 4,
                    OPPF: 1,
                    SP: 12
                },{
                    line: "2-3, 2 2B, 2 RBI, 2 BB, 1 SB",
                    day: 1,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },{
                    line: "2-5, 1 HR, 3 RBI, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-4, 2 HR, 2 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 16
                },
                {
                    line: "1-1, 1 3B, 2 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Max Scherzer",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 618
        },
        stats: {
            gameLog: [
                {
                    line: "6 IP, 3 H, 1 ER, 3 BB, 5 K",
                    day: 7,
                    OP: 3,
                    SP: 13
                },
                {
                    line: "7 IP, 5 H, 2 ER, 1 BB, 10 K",
                    day: 4,
                    OP: 5,
                    SP: 14
                },
                {
                    line: "7.2 IP, 2 H, 0 ER, 1 BB, 10 K",
                    day: 8,
                    OP: 8,
                    SP: 16
                },
                {
                    line: "8 IP, 6 H, 0 ER, 0 BB, 13 K",
                    day: 1,
                    OP: 10,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Freddy Peralta",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Milwaukee Brewers",
            MLBteamAbbrev: "MIL",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 619
        },
        stats: {
            gameLog: [

            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Will Smith",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Atlanta Braves",
            MLBteamAbbrev: "ATL",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 620
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 13
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 8,
                    OP: 4,
                    SP: 15
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 16
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 17
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 0 K, SV",
                    day: 2,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Amir Garrett",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Cincinnati Reds",
            MLBteamAbbrev: "CIN",
            team: "Frozen Acorns",
            teamAbbrev: "FA",
            id: 621
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, HLD",
                    day: 2,
                    OP: 5,
                    SP: 12
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Xander Bogaerts",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Boston Red Sox",
            MLBteamAbbrev: "BOS",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 501
        },
        stats: {
            gameLog: [
                {
                    line: "4-5, 2B, 1 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "4-5, 3 1B, 2B, 2 RBI, K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "3-4, 1 HR, 1 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "3-3, 1 2B, 1 HR, 3 RBI, 1 BB",
                    day: 7,
                    OP: 4,
                    OPPF: 2,
                    SP: 5
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-3, 3 RBI, 1 BB",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "3-5, 3 2B, 1 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-3, 1 2B, 1 RBI",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "3-4, 2 2B, 1 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "1-2, 1 HR, 1 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "1-2, 1 HR, 2 RBI, 2 BB",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "2-4, 1 2B, 1 HR, 4 RBI, 2 BB, 2 K",
                    day: 2,
                    OP: 3,
                    OPPF: 2,
                    SP: 15
                },
                {
                    line: "2-4, 1 HR, 2 RBI",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Manny Machado",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 502
        },
        stats: {
            gameLog: [
                {
                    line: "3-4, HR, 2 RBI",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "1-3, HR, 3 RBI, BB",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-6, 1 RBI, 1 K, 1 SB",
                    day: 7,
                    OP: 0,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-5, 1 3B, 3 RBI",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-4, 1 3B, 1 HR, 5 RBI, 1 BB",
                    day: 5,
                    OP: 5,
                    OPPF: 3,
                    SP: 5
                },
                {
                    line: "2-4, 1 2B, 1 HR, 2 RBI",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-5, 1 2B, 1 RBI, 1 BB, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-3, 1 HR, 3 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "1-3, 1 2B, 3 RBI, 1 BB, 1 SB",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-4, 1 HR, 3 RBI, 1 SB",
                    day: 1,
                    OP: 3,
                    OPPF: 2,
                    SP: 10
                },
                {
                    line: "2-2, 2 HR, 5 RBI, 3 BB",
                    day: 5,
                    OP: 5,
                    OPPF: 3,
                    SP: 11
                },
                {
                    line: "3-4, 1 2B, 2 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "3-4, 2 HR, 4 RBI",
                    day: 8,
                    OP: 4,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 2 K",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "1-5, 1 HR, 2 RBI, 2 K",
                    day: 2,
                    OP: 0,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-4, 1 2B, 1 HR, 2 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Trevor Story",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Colorado Rockies",
            MLBteamAbbrev: "COL",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 503
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2B, 3B, 2 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-3, 1B, 2B, 2 RBI",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 1 HR, 4 RBI, 1 BB, 1 K",
                    day: 7,
                    OP: 3,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "3-5, 1 2B, 1 HR, 2 RBI, 1 BB",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "2-3, 1 RBI, 1 BB, 1 SB",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-5, 1 HR, 2 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 1 BB",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 1 K",
                    day: 3,
                    OP: 3,
                    OPPF: 2,
                    SP: 10
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 SB",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 11
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 K",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 2 K",
                    day: 3,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Michael Conforto",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "New York Mets",
            MLBteamAbbrev: "NYM",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 504
        },
        stats: {
            gameLog: [
                {
                    line: "2-5, 1 RBI, K",
                    day: 5,
                    OP: 0,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-3, 2 1B",
                    day: 8,
                    OP: 0,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "1-4, 1 HR, 1 RBI, 1 K",
                    day: 6,
                    OP: 0,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "3-6, 2 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 3,
                    OPPF: 0,
                    SP: 12
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Bryce Harper",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Philadelphia Phillies",
            MLBteamAbbrev: "PHI",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 505
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2B, 1 RBI, K",
                    day: 7,
                    OP: 0,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "3-3, 1B, 2B, HR, RBI, BB",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "2-4, 2 HR, 2 RBI",
                    day: 7,
                    OP: 3,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "2-2, 1 2B, 3 BB",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-5, 2 RBI",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "3-5, 1 2B, 2 RBI, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "1-4, 1 HR, 1 RBI, 2 BB",
                    day: 3,
                    OP: 2,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "5-6, 1 2B, 1 HR, 4 RBI",
                    day: 7,
                    OP: 5,
                    OPPF: 3,
                    SP: 11
                },
                {
                    line: "3-4, 3 2B, 1 BB, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "1-2, 1 HR, 1 RBI, 2 BB, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-3, 1 2B, 1 HR, 2 RBI, 2 BB, 1 K",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 16
                },
                {
                    line: "3-5, 1 2B, 2 RBI, 1 BB",
                    day: 4,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
                {
                    line: "1-1, 1 HR, 2 RBI, 3 BB",
                    day: 3,
                    OP: 3,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Mike Trout",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Los Angeles Angels",
            MLBteamAbbrev: "LAA",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 506
        },
        stats: {
            gameLog: [
                {
                    line: "3-5, 2B, HR, 1 RBI, K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "1-4, HR, 2 RBI, BB, K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "4-5, 1 2B, 2 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-4, 1 3B, 1 RBI, 1 SB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Shane Bieber",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Cleveland Guardians",
            MLBteamAbbrev: "CLE",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 507
        },
        stats: {
            gameLog: [
                {
                    line: "6.1 IP, 3 H, 2 ER, 12 K, 4 BB",
                    day: 7,
                    OP: 5,
                    SP: 1
                },
                {
                    line: "9 IP, 3 H, 0 ER, 11 K, 1 BB",
                    day: 4,
                    OP: 10,
                    SP: 2
                },
                {
                    line: "7 IP, 4 H, 2 ER, 9 K, 3 BB",
                    day: 6,
                    OP: 5,
                    SP: 3
                },
                {
                    line: "6 IP, 7 H, 3 ER, 1 BB, 11 K",
                    day: 3,
                    OP: 3,
                    SP: 4
                },
                {
                    line: "6.2 IP, 9 H, 2 ER, 3 BB, 8 K",
                    day: 5,
                    OP: 4,
                    SP: 5
                },
                {
                    line: "5.1 IP, 8 H, 3 ER, 1 BB, 6 K",
                    day: 7,
                    OP: 2,
                    SP: 6
                },
                {
                    line: "7 IP, 1 H, 1 ER, 4 BB, 12 K",
                    day: 7,
                    OP: 5,
                    SP: 7
                },
                {
                    line: "6 IP, 5 H, 1 ER, 2 BB, 5 K",
                    day: 6,
                    OP: 3,
                    SP: 8
                },
                {
                    line: "5.2 IP, 10 H, 5 ER, 2 BB, 8 K",
                    day: 2,
                    OP: 1,
                    SP: 9
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Ryan Pressly",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Texas Rangers",
            MLBteamAbbrev: "TEX",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 508
        },
        stats: {
            gameLog: [
                {
                    line: "2 IP, 2 H, 2 K",
                    day: 6,
                    OP: 3,
                    SP: 1
                },{
                    line: "1.0 IP, 1 K, SV",
                    day: 8,
                    OP: 3,
                    SP: 2
                },
                {
                    line: "1.0 IP, 1K, SV",
                    day: 9,
                    OP: 3,
                    SP: 3
                },
                {
                    line: "2 IP, 3 H, 1 ER, 0 BB, 2 K, SV",
                    day: 9,
                    OP: 5,
                    SP: 4
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 5
                },
                {
                    line: "0.1 IP, 0 H, 0 ER, 0 BB, 0 K, HLD",
                    day: 5,
                    OP: 0,
                    SP: 6
                },
                {
                    line: "1 IP, 2 H, 0 ER, 0 BB, 1 K, SV",
                    day: 9,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 9,
                    OP: 4,
                    SP: 8
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K",
                    day: 7,
                    OP: 1,
                    SP: 9
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 6,
                    OP: 5,
                    SP: 10
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 11
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 1 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 12
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 3,
                    OP: 3,
                    SP: 13
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 1,
                    OP: 4,
                    SP: 17
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Anthony Bass",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Miami Marlins",
            MLBteamAbbrev: "MIA",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 509
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, K",
                    day: 3,
                    OP: 0,
                    SP: 1
                },
                {
                    line: "1 IP, K",
                    day: 7,
                    OP: 0,
                    SP: 2
                },
                {
                    line: "1.0 IP, 1 H, 1 K",
                    day: 6,
                    OP: 0,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, HLD",
                    day: 5,
                    OP: 4,
                    SP: 13
                },
                {
                    line: "1.1 IP, 0 H, 0 ER, 0 BB, 3 K, HLD",
                    day: 6,
                    OP: 5,
                    SP: 15
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Trevor Rosenthal",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Oakland Athletics",
            MLBteamAbbrev: "OAK",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 510
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Jake McGee",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "San Francisco Giants",
            MLBteamAbbrev: "SF",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 511
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 1,
                    OP: 3,
                    SP: 14
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 4,
                    OP: 3,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Mark Melancon",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 512
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 4
                },
                {
                    line: "1.2 IP, 3 H, 0 ER, 2 BB, 0 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 0 K, SV",
                    day: 4,
                    OP: 3,
                    SP: 6
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 2,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "1 IP, 2 H, 0 ER, 0 BB, 3 K, SV",
                    day: 2,
                    OP: 4,
                    SP: 8
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 8,
                    OP: 3,
                    SP: 9
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 10
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 0 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 11
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 9,
                    OP: 4,
                    SP: 12
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 8,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "1.1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 1,
                    OP: 5,
                    SP: 15
                },
                {
                    line: "2 IP, 0 H, 0 ER, 2 BB, 1 K",
                    day: 3,
                    OP: 3,
                    SP: 16
                },
                {
                    line: "1 IP, 2 H, 0 ER, 0 BB, 3 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 17
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 0 K, SV",
                    day: 3,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "A.J. Puk",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Oakland Athletics",
            MLBteamAbbrev: "OAK",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 513
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Aaron Nola",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Philadelphia Phillies",
            MLBteamAbbrev: "PHI",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 514
        },
        stats: {
            gameLog: [
                {
                    line: "8.2 IP, 4 H, 1 ER, 0 BB, 9 K",
                    day: 3,
                    OP: 9,
                    SP: 13
                },
                {
                    line: "4 IP, 1 H, 0 ER, 0 BB, 7 K",
                    day: 1,
                    OP: 3,
                    SP: 15
                },
                {
                    line: "8.2 IP, 2 H, 2 ER, 2 BB, 11 K",
                    day: 3,
                    OP: 8,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Zach Wheeler",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Philadelphia Phillies",
            MLBteamAbbrev: "PHI",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 515
        },
        stats: {
            gameLog: [
                {
                    line: "7 IP, 4 H, 0 ER, 2 BB, 8 K",
                    day: 7,
                    OP: 6,
                    SP: 10
                },
                {
                    line: "7.2 IP, 4 H, 0 ER, 0 BB, 9 K",
                    day: 3,
                    OP: 8,
                    SP: 11
                },
                {
                    line: "6 IP, 7 H, 4 ER, 2 BB, 7 K",
                    day: 6,
                    OP: 2,
                    SP: 12
                },
                {
                    line: "9 IP, 2 H, 0 ER, 1 BB, 11 K",
                    day: 8,
                    OP: 10,
                    SP: 14
                },
                {
                    line: "6 IP, 5 H, 4 ER, 4 BB, 4 K",
                    day: 3,
                    OP: 1,
                    SP: 17
                },
                {
                    line: "6 IP, 5 H, 0 ER, 0 BB, 9 K",
                    day: 1,
                    OP: 5,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Justin Turner",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 516
        },
        stats: {
            gameLog: [
                {
                    line: "3-4, 1 HR, 4 RBI",
                    day: 2,
                    OP: 3,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "2-5, 1 HR, 4 RBI, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 2 BB",
                    day: 6,
                    OP: 3,
                    OPPF: 2,
                    SP: 15
                },
                {
                    line: "2-5, 2 HR, 3 RBI, 2 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Marcus Semien",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 517
        },
        stats: {
            gameLog: [
                {
                    line: "3-5, 2 HR, 4 RBI",
                    day: 8,
                    OP: 4,
                    OPPF: 2,
                    SP: 16
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 1 BB, 1 K, 1 SB",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 17
                },
                {
                    line: "2-5, 2 HR, 5 RBI",
                    day: 1,
                    OP: 4,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Alex Bregman",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "Houston Astros",
            MLBteamAbbrev: "HOU",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 518
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 HR, 1 RBI",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "3-4, 2 2B, 1 HR, 2 RBI, 1 BB",
                    day: 7,
                    OP: 4,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "3-5, 1 2B, 1 HR, 3 RBI",
                    day: 2,
                    OP: 3,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Adalberto Mondesi",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Kansas City Royals",
            MLBteamAbbrev: "KC",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 519
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, 1 HR, 2 RBI",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 7
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "George Springer",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 520
        },
        stats: {
            gameLog: [
                {
                    line: "2-5, 2 HR, 3 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 1 BB, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 1 K",
                    day: 9,
                    OP: 3,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "4-5, 1 2B, 1 HR, 3 RBI",
                    day: 4,
                    OP: 4,
                    OPPF: 2,
                    SP: 14
                },
                {
                    line: "2-4, 2 HR, 2 RBI, 1 BB, 2 K",
                    day: 2,
                    OP: 2,
                    OPPF: 1,
                    SP: 15
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Andrew Benintendi",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Kansas City Royals",
            MLBteamAbbrev: "KC",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 521
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, 2 BB, 1 K",
                    day: 5,
                    OP: 0,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-3, 3 RBI, 1 BB, 1 SB",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-5, 1 HR, 5 RBI",
                    day: 8,
                    OP: 3,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-4, 1 3B, 1 HR, 2 RBI, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "1-4, 1 HR, 1 RBI",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Mark Canha",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Oakland Athletics",
            MLBteamAbbrev: "OAK",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 522
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Chris Taylor",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 523
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, 1 2B, 3 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 1 BB",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-4, 1 2B, 2 HR, 3 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 4,
                    OPPF: 1,
                    SP: 12
                },
                {
                    line: "3-4, 2 HR, 2 RBI",
                    day: 3,
                    OP: 3,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Lourdes Gurriel Jr.",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 524
        },
        stats: {
            gameLog: [
                {
                    line: "2-2, 2 2B, 3 RBI, 1 BB",
                    day: 4,
                    OP: 3,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "3-5, 1 2B, 1 HR, 4 RBI",
                    day: 8,
                    OP: 4,
                    OPPF: 3,
                    SP: 17
                },
                {
                    line: "2-3, 2 HR, 7 RBI, 3 BB, 1 K",
                    day: 7,
                    OP: 5,
                    OPPF: 2,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Mitch Haniger",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Seattle Mariners",
            MLBteamAbbrev: "SEA",
            team: "Lunar Doodles",
            teamAbbrev: "LD",
            id: 525
        },
        stats: {
            gameLog: [
                {
                    line: "2-2, 2 2B, 2 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-4, 1 HR, 1 RBI, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-4, 2 HR, 2 RBI",
                    day: 8,
                    OP: 3,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "3-5, 1 2B, 1 HR, 2 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "3-4, 1 2B, 2 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 4,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "3-4, 1 3B",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-5, 1 HR, 1 RBI, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-5, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "3-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
                {
                    line: "4-4, 1 HR, 3 RBI",
                    day: 8,
                    OP: 3,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Fernando Tatis Jr.",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 101
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, HR, 1 RBI, 1 BB",
                    day: 4,
                    OP: 2,
                    OPPF: 1,
                    SP: 1
                },
                {
                    line: "3-5, 2 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 3,
                    OPPF: 2,
                    SP: 3
                },
                {
                    line: "2-4, 1 2B, 2 RBI, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-4, 2 SB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-3, 1 2B, 2 RBI, 2 BB, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-5, 1 HR, 4 RBI, 1 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "4-5, 3 HR, 4 RBI",
                    day: 5,
                    OP: 5,
                    OPPF: 4,
                    SP: 10
                },
                {
                    line: "2-5, 1 HR, 2 RBI, 1 K, 1 SB",
                    day: 9,
                    OP: 2,
                    OPPF: 2,
                    SP: 11
                },
                {
                    line: "4-5, 1 2B, 2 RBI, 1 SB",
                    day: 5,
                    OP: 3,
                    OPPF: 2,
                    SP: 12
                },
                {
                    line: "2-3, 1 2B, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "4-5, 1 2B, 2 HR, 4 RBI",
                    day: 6,
                    OP: 5,
                    OPPF: 3,
                    SP: 15
                },
                {
                    line: "2-3, 1 HR, 4 RBI, 2 BB",
                    day: 8,
                    OP: 4,
                    OPPF: 3,
                    SP: 17
                },
                {
                    line: "3-4, 1 HR, 3 RBI, 1 K",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Freddie Freeman",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "Atlanta Braves",
            MLBteamAbbrev: "ATL",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 102
        },
        stats: {
            gameLog: [
                {
                    line: "1-4, HR, 2 RBI, BB",
                    day: 9,
                    OP: 2,
                    OPPF: 1,
                    SP: 1
                },
                {
                    line: "2-4, 2B, HR, RBI, 2 BB",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "1-4, 1 HR, 3 RBI, 1 BB",
                    day: 8,
                    OP: 2,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "4-5, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 1,
                    OP: 3,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "3-3, 1 HR, 2 RBI, 1 BB",
                    day: 3,
                    OP: 3,
                    OPPF: 1,
                    SP:5 
                },
                {
                    line: "1-4, 1 HR, 4 RBI, 1 BB, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-4, 1 2B, 1 BB",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-3, 1 RBI, 1 BB, 1 SB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 2 BB, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "4-4, 1 BB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "3-3, 1 2B, 1 RBI, 1 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 2,
                    SP: 11
                },
                {
                    line: "4-5, 1 HR, 2 RBI, 1 SB",
                    day: 4,
                    OP: 3,
                    OPPF: 2,
                    SP: 12
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "3-4, 1 HR, 1 RBI",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "4-5, 1 2B, 1 3B, 1 HR, 2 RBI, 1 BB (Cycle)",
                    day: 9,
                    OP: 5,
                    OPPF: 3,
                    SP: 15
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Trea Turner",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 103
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2B, HR, 2 RBI, K",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 1
                },
                {
                    line: "2-4, 2 HR, 2 RBI, K",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 2 HR, 2 RBI, 1 K",
                    day: 9,
                    OP: 2,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "1-5, 1 HR, 2 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-5, 1 2B, 1 HR, 3 RBI",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 5
                },
                {
                    line: "3-4, 1 2B, 1 RBI",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "1-4, 1 RBI, 1 BB, 1 K, 2 SB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-5, 1 RBI, 1 K",
                    day: 4,
                    OP: 0,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "4-5, 1 3B, 1 RBI",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-4, 1 2B, 2 RBI, 1 BB",
                    day: 3,
                    OP: 2,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "4-4, 1 2B, 1 3B, 1 HR, 1 RBI, 2 SB (cycle)",
                    day: 1,
                    OP: 5,
                    OPPF: 5,
                    SP: 11
                },
                {
                    line: "2-4, 1 3B, 1 HR, 4 RBI, 1 K",
                    day: 7,
                    OP: 3,
                    OPPF: 2,
                    SP: 12
                },
                {
                    line: "3-4, 1 HR, 1 RBI",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "3-3, 1 BB, 1 SB",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 17
                },
                {
                    line: "2-3, 1 2B, 1 HR, 2 RBI, 1 BB, 1 SB",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Jeff McNeil",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "New York Mets",
            MLBteamAbbrev: "NYM",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 104
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, HR, 1 RBI, 1 BB",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-6, 1 HR, 2 RBI, 1 K, 1 SB",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 12
                },
                {
                    line: "2-5, 1 2B, 1 HR, 2 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Luis Robert",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Chicago White Sox",
            MLBteamAbbrev: "CHW",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 105
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 2 K",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-3, 1B, 3B, BB",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "3-4, 1 2B, 1 K, 1 SB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-4, 1 2B, 1 RBI, 1 K",
                    day: 3,
                    OP: 0,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "3-5, 1 2B, 1 RBI, 1 BB",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-4, 2 HR, 3 RBI",
                    day: 2,
                    OP: 3,
                    OPPF: 2,
                    SP: 17
                },
                {
                    line: "4-5, 3 2B, 3 RBI",
                    day: 6,
                    OP: 4,
                    OPPF: 2,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Ronald Acuna Jr.",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Atlanta Braves",
            MLBteamAbbrev: "ATL",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 106
        },
        stats: {
            gameLog: [
                {
                    line: "4-5, 2 2B, HR, 2 RBI",
                    day: 9,
                    OP: 4,
                    OPPF: 3,
                    SP: 1
                },
                {
                    line: "3-5, 2B, 2 HR, 4 RBI, K",
                    day: 5,
                    OP: 4,
                    OPPF: 2,
                    SP: 2
                },
                {
                    line: "1-4, 1 HR, 1 RBI, 1 BB, 2 K",
                    day: 9,
                    OP: 0,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-4, 1 2B, 1 HR, 1 RBI, 1 BB",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-4, 1 HR, 1 RBI, 2 K",
                    day: 5,
                    OP: 0,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-5, 1 HR, 5 RBI, 1 K",
                    day: 6,
                    OP: 3,
                    OPPF: 1,
                    SP: 6
                },
                {
                    line: "3-4, 1 2B, 1 HR, 2 RBI, 1 BB, 1 K, 2 SB",
                    day: 8,
                    OP: 4,
                    OPPF: 2,
                    SP: 7
                },
                {
                    line: "3-4, 1 2B, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 6,
                    OP: 3,
                    OPPF: 2,
                    SP: 8
                },
                {
                    line: "3-5, 2 2B, 1 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-4, 1 2B, 1 HR, 1 RBI, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "3-5, 1 HR, 1 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 2,
                    SP: 11
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Lucas Giolito",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Chicago White Sox",
            MLBteamAbbrev: "CHW",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 107
        },
        stats: {
            gameLog: [
                {
                    line: "5.1 IP, 2 H, 2 ER, 8 K, 2 BB",
                    day: 1,
                    OP: 3,
                    SP: 1
                },
                {
                    line: "7.0 IP, 3 H, 0 ER, 8 K  2 BB",
                    day: 4,
                    OP: 6,
                    SP: 2
                },
                {
                    line: "6.2 IP, 5 H, 4 ER, 7 K, 3 BB",
                    day: 9,
                    OP: 3,
                    SP: 3
                },
                {
                    line: "5.1 IP, 5 H, 1 ER, 3 BB, 8 K",
                    day: 5,
                    OP: 3,
                    SP: 4
                },
                {
                    line: "5 IP, 4 H, 1 ER, 2 BB, 2 K",
                    day: 3,
                    OP: 2,
                    SP: 5
                },
                {
                    line: "7 IP, 3 H, 1 ER, 3 BB, 12 K",
                    day: 6,
                    OP: 6,
                    SP: 7
                },
                {
                    line: "9 IP, 3 H, 1 ER, 0 BB, 8 K",
                    day: 5,
                    OP: 9,
                    SP: 12
                },
                {
                    line: "8 IP, 2 H, 1 ER, 0 BB, 8 K",
                    day: 9,
                    OP: 7,
                    SP: 14
                },
                {
                    line: "4 IP, 6 H, 2 ER, 3 BB, 8 K",
                    day: 6,
                    OP: 1,
                    SP: 15
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Robbie Ray",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 123
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Liam Hendriks",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Chicago White Sox",
            MLBteamAbbrev: "CHW",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 108
        },
        stats: {
            gameLog: [
                {
                    line: "1.1 IP, 2 H, 2 ER, BB, 2 K, SV",
                    day: 2,
                    OP: 0,
                    SP: 1
                },
                {
                    line: "1.0 IP, 1 H, 1 K, SV",
                    day: 9,
                    OP: 3,
                    SP: 2
                },
                {
                    line: "1.2 IP, 1 H, 1 ER, 5 K, SV",
                    day: 5,
                    OP: 5,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 2,
                    OP: 3,
                    SP: 4
                },
                {
                    line: "1.2 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 7,
                    OP: 5,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 1,
                    OP: 5,
                    SP: 7
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 1,
                    OP: 4,
                    SP: 8 
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 2,
                    OP: 3,
                    SP: 9
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 3,
                    OP: 3,
                    SP: 10
                },
                {
                    line: "2 IP, 0 H, 0 ER, 0 BB, 4 K, SV",
                    day: 7,
                    OP: 5,
                    SP: 11
                },
                {
                    line: "1.1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 2,
                    OP: 5,
                    SP: 12
                },
                {
                    line: "2 IP, 1 H, 0 ER, 0 BB, 3 K, SV",
                    day: 3,
                    OP: 5,
                    SP: 13
                },
                {
                    line: "1.1 IP, 1 H, 0 ER, 0 BB, 4 K",
                    day: 6,
                    OP: 3,
                    SP: 14
                },
                {
                    line: "1.2 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 9,
                    OP: 5,
                    SP: 15
                },
                {
                    line: "1.2 IP, 3 H, 1 ER, 1 BB, 1 K, SV",
                    day: 6,
                    OP: 2,
                    SP: 16
                },
                {
                    line: "1.2 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 5,
                    OP: 5,
                    SP: 17
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 2,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Raisel Iglesias",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Los Angeles Angels",
            MLBteamAbbrev: "LAA",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 109
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 3 K, SV",
                    day: 8,
                    OP: 5,
                    SP: 1
                },
                {
                    line: "1.0 IP, 1 H, 1 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 1,
                    OP: 3,
                    SP: 4
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 2,
                    OP: 5,
                    SP: 6
                },
                {
                    line: "1.1 IP, 1 H, 0 ER, 0 BB, 3 K, SV",
                    day: 2,
                    OP: 5,
                    SP: 7
                },
                {
                    line: "2 IP, 0 H, 0 ER, 0 BB, 4 K, SV",
                    day: 2,
                    OP: 5,
                    SP: 8 
                },
                {
                    line: "2 IP, 2 H, 1 ER, 1 BB, 2 K, SV",
                    day: 6,
                    OP: 5,
                    SP: 9
                },
                {
                    line: "2 IP, 0 H, 0 ER, 0 BB, 5 K",
                    day: 3,
                    OP: 5,
                    SP: 10
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 8,
                    OP: 5,
                    SP: 11
                },
                {
                    line: "1.1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 9,
                    OP: 5,
                    SP: 13 
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 1 K, SV",
                    day: 4,
                    OP: 3,
                    SP: 14
                },
                {
                    line: "1.1 IP, 2 H, 0 ER, 0 BB, 3 K, SV",
                    day: 6,
                    OP: 5,
                    SP: 15
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Austin Riley",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "Atlanta Braves",
            MLBteamAbbrev: "ATL",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 110
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 HR, 1 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "1-2, 1 HR, 3 RBI, 1 BB",
                    day: 9,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Tim Anderson",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Chicago White Sox",
            MLBteamAbbrev: "CHW",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 111
        },
        stats: {
            gameLog: [
                {
                    line: "3-4, 2 1B, HR, RBI",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "3-4, 1 HR, 3 RBI",
                    day: 3,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "2-5, 1 2B, 1 HR, 3 RBI",
                    day: 3,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "3-6, 1 HR, 2 RBI, 2 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Jazz Chisholm Jr.",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Miami Marlins",
            MLBteamAbbrev: "MIA",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 112
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 HR, 2 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Pete Alonso",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "New York Mets",
            MLBteamAbbrev: "NYM",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 113
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2 HR, 3 RBI",
                    day: 1,
                    OP: 3,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "2-5, 1 HR, 1 RBI, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 1 BB",
                    day: 2,
                    OP: 4,
                    OPPF: 2,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Cedric Mullins",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Baltimore Orioles",
            MLBteamAbbrev: "BAL",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 114
        },
        stats: {
            gameLog: [
                {
                    line: "2-5, 1 HR, 1 RBI, 1 K, 2 SB",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Adolis Garcia",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Texas Rangers",
            MLBteamAbbrev: "TEX",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 115
        },
        stats: {
            gameLog: [
                {
                    line: "1-4, 1 HR, 2 RBI, 2 K",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 2 K",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "3-4, 1 2B, 1 HR, 5 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 4,
                    OPPF: 3,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Nelson Cruz",
            pos: "DH",
            posGroup: "OF",
            MLBteam: "Tampa Bay Rays",
            MLBteamAbbrev: "TB",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 116
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, 1B, HR, 2 RBI, BB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-5, 2 HR, 4 RBI, 1 K",
                    day: 3,
                    OP: 3,
                    OPPF: 2,
                    SP: 3
                },
                {
                    line: "2-4, 2 RBI, 1 BB",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-5, 1 HR, 1 RBI, 1 K",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-4, 1 HR, 1 RBI",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "1-4, 1 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-3, 1 2B, 1 HR, 1 RBI, 1 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 2,
                    SP: 11
                },
                {
                    line: "3-3, 1 BB, 1 SB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 1 BB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "2-6, 1 2B, 1 HR, 5 RBI, 1 K",
                    day: 6,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "2-4, 2 HR, 5 RBI, 2 K",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "3-4, 1 2B, 2 RBI, 1 K",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "4-5, 1 2B, 2 HR, 4 RBI",
                    day: 2,
                    OP: 5,
                    OPPF: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Teoscar Hernandez",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 117
        },
        stats: {
            gameLog: [
                {
                    line: "3-6, 1 2B, 2 HR, 6 RBI, 1 K",
                    day: 2,
                    OP: 5,
                    OPPF: 3,
                    SP: 9
                },
                {
                    line: "2-5, 1 HR, 3 RBI, 1 K",
                    day: 6,
                    OP: 2,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "3-5, 2 2B, 1 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 2,
                    SP: 11
                },
                {
                    line: "1-1, 1 2B, 1 RBI, 2 BB",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-4, 2 HR, 4 RBI, 1 BB, 2 K",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "3-4, 1 2B, 1 HR, 2 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 1 BB",
                    day: 8,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
                {
                    line: "2-3, 1 HR, 5 RBI",
                    day: 7,
                    OP: 3,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Yermin Mercedes",
            pos: "DH",
            posGroup: "OF",
            MLBteam: "Chicago White Sox",
            MLBteamAbbrev: "CHW",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 118
        },
        stats: {
            gameLog: [
                {
                    line: "2-5, 1 2B, 1 3B, 3 RBI, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "3-6, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 6
                },
                {
                    line: "2-4, 1 HR, 3 RBI",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-4, 1 2B",
                    day: 8,
                    OP: 0,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-6, 3 RBI, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Brandon Woodruff",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Milwaukee Brewers",
            MLBteamAbbrev: "MIL",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 119
        },
        stats: {
            gameLog: [
                {
                    line: "7 IP, 3 H, 0 ER, 0 BB, 8 K",
                    day: 9,
                    OP: 6,
                    SP: 6
                },
                {
                    line: "7 IP, 4 H, 2 ER, 0 BB, 5 K",
                    day: 9,
                    OP: 4,
                    SP: 8
                },
                {
                    line: "5 IP, 5 H, 5 ER, 2 BB, 5 K",
                    day: 6,
                    OP: 0,
                    SP: 9
                },
                {
                    line: "7 IP, 3 H, 1 ER, 2 BB, 9 K",
                    day: 3,
                    OP: 5,
                    SP: 10
                },
                {
                    line: "6.1 IP, 4 H, 4 ER, 1 BB, 6 K",
                    day: 6,
                    OP: 3,
                    SP: 11
                },
                {
                    line: "7 IP, 5 H, 3 ER, 2 BB, 9 K",
                    day: 3,
                    OP: 4,
                    SP: 13
                },
                {
                    line: "6 IP, 4 H, 0 ER, 0 BB, 10 K",
                    day: 7,
                    OP: 5,
                    SP: 16
                },
                {
                    line: "6 IP, 5 H, 1 ER, 3 BB, 8 K",
                    day: 4,
                    OP: 4,
                    SP: 17
                },
                {
                    line: "6 IP, 9 H, 4 ER, 1 BB, 6 K",
                    day: 1,
                    OP: 2,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Tyler Rogers",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "San Francisco Giants",
            MLBteamAbbrev: "SF",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 120
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, HLD",
                    day: 7,
                    OP: 4,
                    SP: 16
                },
                {
                    line: "1 IP, 2 H, 0 ER, 0 BB, 3 K, HLD",
                    day: 7,
                    OP: 4,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Greg Holland",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Kansas City Royals",
            MLBteamAbbrev: "KC",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 121
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 8,
                    OP: 4,
                    SP: 12
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Drew Pomeranz",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Magic Manatees",
            teamAbbrev: "MT",
            id: 122
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 1 H, 3 K",
                    day: 1,
                    OP: 0,
                    SP: 2
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "J.T. Realmuto",
            pos: "C",
            posGroup: "IF",
            MLBteam: "Philadelphia Phillies",
            MLBteamAbbrev: "PHI",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 201
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, HR, 3 RBI, BB",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 1
                },
                {
                    line: "1-3, HR, 2 RBI, K",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "3-4, 1 3B, 1 SB",
                    day: 5,
                    OP: 2,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "2-3, 1 2B, 1 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "3-5, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "1-3, 1 2B, 1 RBI, 1 BB",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-3, 1 HR, 3 RBI, 2 BB, 1 K",
                    day: 4,
                    OP: 3,
                    OPPF: 2,
                    SP: 8
                },
                {
                    line: "3-4, 1 2B, 1 HR, 2 RBI",
                    day: 9,
                    OP: 3,
                    OPPF: 2,
                    SP: 9
                },
                {
                    line: "1-6",
                    day: 3,
                    OP: 0,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "2-4, 1 HR, 1 RBI",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "5-6, 2 2B, 4 RBI, 1 SB",
                    day: 1,
                    OP: 5,
                    OPPF: 3,
                    SP: 14
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K, 1 SB",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Jose Altuve",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "Houston Astros",
            MLBteamAbbrev: "HOU",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 202
        },
        stats: {
            gameLog: [
                {
                    line: "3-3, 2 BB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-5, 1 HR, 3 RBI",
                    day: 9,
                    OP: 2,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "2-5, 1 2B, 3 RBI, 1 BB, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-6, 1 HR, 1 RBI, 1 K",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 1 BB",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 7
                },
                {
                    line: "2-3, 2 RBI, 1 BB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-4, 2 HR, 2 RBI, 1 BB",
                    day: 5,
                    OP: 3,
                    OPPF: 2,
                    SP: 9
                },
                {
                    line: "2-5, 1 HR, 2 RBI, 1 BB, 2 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "1-3, 1 HR, 4 RBI, 2 BB",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 11
                },
                {
                    line: "2-4, 2 HR, 2 RBI, 1 BB",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 12
                },
                {
                    line: "3-6, 2 HR, 5 RBI, 1 K",
                    day: 8,
                    OP: 4,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "4-5, 2 2B, 1 RBI",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-4, 2 2B, 1 RBI, 2 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Ozzie Albies",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "Atlanta Braves",
            MLBteamAbbrev: "ATL",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 203
        },
        stats: {
            gameLog: [
                {
                    line: "1-4, 1 RBI",
                    day: 7,
                    OP: 0,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-4, 2B, HR, RBI, BB, K",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 1 2B, 1 HR, 1 RBI, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "3-5, 1 2B, 1 HR, 1 RBI, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "3-5, 2 2B, 1 RBI",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-5, 1 2B, 1 HR, 3 RBI, 1 BB",
                    day: 6,
                    OP: 3,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-4, 1 2B, 2 RBI, 1 SB",
                    day: 9,
                    OP: 2,
                    OPPF: 1,
                    SP: 7
                },
                {
                    line: "3-4, 1 2B, 2 RBI, 1 K, 1 SB",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "3-5, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 3,
                    OPPF: 2,
                    SP: 9
                },
                {
                    line: "1-4, 1 HR, 3 RBI, 1 K",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 10 
                },
                {
                    line: "5-6, 2 HR, 7 RBI, 1 K, 1 SB",
                    day: 1,
                    OP: 5,
                    OPPF: 3,
                    SP: 11
                },
                {
                    line: "2-5, 1 2B, 1 RBI",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "1-6, 1 HR, 3 RBI, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "3-5, 1 3B, 1 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 15 
                },
                {
                    line: "2-5, 1 2B, 1 HR, 1 RBI, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 17 
                },
                {
                    line: "2-3, 1 HR, 4 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 18 
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Christian Yelich",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Milwaukee Brewers",
            MLBteamAbbrev: "MIL",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 204
        },
        stats: {
            gameLog: [
                {
                    line: "3-4, 2B, 1 BB, 1 K, 1 SB",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "1-2, 1 3B, 1 RBI, 1 BB, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "2-3, 1 2B, 3 RBI, 1 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 9
                },
                {
                    line: "2-5, 1 HR, 3 RBI",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "2-5, 1 2B, 2 RBI, 1 BB, 1 K, 1 SB",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "3-5, 2 HR, 6 RBI, 1 SB",
                    day: 3,
                    OP: 5,
                    OPPF: 2,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Giancarlo Stanton",
            pos: "DH",
            posGroup: "OF",
            MLBteam: "New York Yankees",
            MLBteamAbbrev: "NYY",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 205
        },
        stats: {
            gameLog: [
                {
                    line: "1-4, HR, 4 RBI, K",
                    day: 5,
                    OP: 2,
                    OPPF: 1,
                    SP: 1
                },
                {
                    line: "1-4, HR, 2 RBI, 2 K",
                    day: 7,
                    OP: 0,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 2 HR, 2 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "4-5, 1 2B, 1 HR, 3 RBI",
                    day: 7,
                    OP: 4,
                    OPPF: 3,
                    SP: 4
                },
                {
                    line: "1-3, 1 RBI, 2 BB, 1 K",
                    day: 2,
                    OP: 0,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "3-5, 1 2B, 2 HR, 5 RBI",
                    day: 7,
                    OP: 5,
                    OPPF: 4,
                    SP: 8
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 6,
                    OP: 2,
                    OPPF: 1,
                    SP: 9
                },
                {
                    line: "1-2, 3 BB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 BB",
                    day: 7,
                    OP: 3,
                    OPPF: 1,
                    SP: 11
                },
                {
                    line: "1-2, 1 2B, 2 BB",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "2-5, 1 HR, 4 RBI",
                    day: 3,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "1-5, 1 HR, 2 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-3, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 K",
                    day: 3,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
                {
                    line: "2-5, 1 2B, 1 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Aaron Judge",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "New York Yankees",
            MLBteamAbbrev: "NYY",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 206
        },
        stats: {
            gameLog: [
                {
                    line: "3-5, HR, 4 RBI",
                    day: 6,
                    OP: 3,
                    OPPF: 2,
                    SP: 1
                },
                {
                    line: "3-4, 1B, 2 HR, 2 RBI",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "1-3, 1 2B, 1 RBI, 1 BB",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-4, 2 HR, 5 RBI",
                    day: 3,
                    OP: 4,
                    OPPF: 3,
                    SP: 4
                },
                {
                    line: "2-3, 2 HR, 2 RBI, 1 BB",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 5
                },
                {
                    line: "2-3, 1 HR, 1 RBI, 1 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "1-1, 1 HR, 3 RBI, 1 BB",
                    day: 3,
                    OP: 2,
                    OPPF: 1,
                    SP: 7
                },
                {
                    line: "2-4, 1 2B, 1 HR, 1 RBI",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "2-5, 1 RBI, 1 K",
                    day: 8,
                    OP: 0,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-3, 1 2B, 1 HR, 2 RBI, 2 BB",
                    day: 4,
                    OP: 4,
                    OPPF: 2,
                    SP: 10
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "2-4, 1 2B, 1 HR, 1 RBI, 1 K",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 2 HR, 5 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 4,
                    OPPF: 2,
                    SP: 15
                },
                {
                    line: "3-5, 1 HR, 4 RBI, 1 K",
                    day: 9,
                    OP: 3,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "3-4, 1 2B, 1 HR, 2 RBI",
                    day: 1,
                    OP: 3,
                    OPPF: 2,
                    SP: 17
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 2 K",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Trevor Bauer",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Los Angeles Dodger",
            MLBteamAbbrev: "LAD",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 207
        },
        stats: {
            gameLog: [
                {
                    line: "6.2 IP, 3 H, 2 ER, 10 K, 1 BB",
                    day: 7,
                    OP: 5,
                    SP: 1
                },
                {
                    line: "7.0 IP, 1 H, 0 ER, 9 K , 2 BB",
                    day: 4,
                    OP: 7,
                    SP: 2
                },
                {
                    line: "6.0 IP, 5 H, 2 ER, 9 K , 0 BB",
                    day: 6,
                    OP: 4,
                    SP: 3
                },
                {
                    line: "8 IP, 4 H, 2 ER, 2 BB, 6 K",
                    day: 2,
                    OP: 5,
                    SP: 4
                },
                {
                    line: "7 IP, 2 H, 0 ER, 0 BB, 10 K",
                    day: 9,
                    OP: 7,
                    SP: 5
                },
                {
                    line: "6.1 IP, 2 H, 0 ER, 4 BB, 11 K",
                    day: 6,
                    OP: 5,
                    SP: 6
                },
                {
                    line: "6.2 IP, 5 H, 3 ER, 1 BB, 5 K",
                    day: 7,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "6 IP, 6 H, 3 ER, 4 BB, 7 K",
                    day: 4,
                    OP: 2,
                    SP: 8
                },
                {
                    line: "7 IP, 3 H, 0 ER, 3 BB, 8 K",
                    day: 7,
                    OP: 6,
                    SP: 9
                },
                {
                    line: "6 IP, 8 H, 2 ER, 1 BB, 8 K",
                    day: 8,
                    OP: 3,
                    SP: 10
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Aroldis Chapman",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "New York Yankees",
            MLBteamAbbrev: "NYY",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 208
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 3 K",
                    day: 7,
                    OP: 1,
                    SP: 1
                },
                {
                    line: "1 IP, 1 H, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 2
                },
                {
                    line: "1.0 IP, BB, 3 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 4
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 5
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 3 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 0 H, 0 ER, 2 BB, 2 K, SV",
                    day: 9,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K",
                    day: 4,
                    OP: 0,
                    SP: 8
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 4,
                    OP: 3,
                    SP: 9
                },
                {
                    line: "1 IP, 3 H, 2 ER, 2 BB, 2 K",
                    day: 3,
                    OP: 0,
                    SP: 10
                },
                {
                    line: "1 IP, 1 H, 0 ER, 2 BB, 3 K",
                    day: 7,
                    OP: 0,
                    SP: 11
                },
                {
                    line: "1 IP, 1 H, 1 ER, 0 BB, 3 K, SV",
                    day: 8,
                    OP: 3,
                    SP: 12
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 2 K, SV",
                    day: 5,
                    OP: 4,
                    SP: 13
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 1,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 8,
                    OP: 3,
                    SP: 16
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 5,
                    OP: 3,
                    SP: 17
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Devin Williams",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Milwaukee Brewers",
            MLBteamAbbrev: "MIL",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 209
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 1 H, 1 ER, BB, 2 K",
                    day: 7,
                    OP: 0,
                    SP: 1
                },
                {
                    line: "1 IP, 2 H, 0 ER, 0 BB, 3 K, HLD",
                    day: 1,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 2 K, SV",
                    day: 9,
                    OP: 4,
                    SP: 15
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, HLD",
                    day: 7,
                    OP: 3,
                    SP: 16
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 1 K, HLD",
                    day: 3,
                    OP: 3,
                    SP: 17
                },
                {
                    line: "1 IP, 1 H, 0 ER, 1 BB, 2 K, HLD",
                    day: 3,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Paul Goldschmidt",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "St Louis Cardinals",
            MLBteamAbbrev: "STL",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 210
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1B, HR, 3 RBI",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "3-5, 1 HR, 2 RBI, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "2-3, 1 HR, 1 RBI, 2 BB",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 K",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-5, 1 2B, 1 RBI, 1 SB",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-4, 2 HR, 2 RBI, 1 BB, 1 K, 1 SB",
                    day: 7,
                    OP: 3,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-2, 2 HR, 3 RBI, 2 BB",
                    day: 5,
                    OP: 4,
                    OPPF: 3,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Nolan Arenado",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "St Louis Cardinals",
            MLBteamAbbrev: "STL",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 211
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, 1 HR, 2 RBI, 1 BB",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "3-5, 1 3B, 1 HR, 1 RBI",
                    day: 3,
                    OP: 3,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "2-4, 1 2B, 1 HR, 4 RBI, 1 BB",
                    day: 5,
                    OP: 4,
                    OPPF: 2,
                    SP: 15
                },
                {
                    line: "2-5, 2 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 3,
                    OPPF: 2,
                    SP: 17
                },
                {
                    line: "2-4, 1 3B, 1 HR, 3 RBI",
                    day: 6,
                    OP: 3,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Shohei Ohtani",
            pos: "DH",
            posGroup: "OF",
            MLBteam: "Los Angeles Angels",
            MLBteamAbbrev: "LAA",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 212
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 2B, 1 HR, 2 RBI, 1 K",
                    day: 6,
                    OP: 2,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "2-5, 2 2B, 2 RBI, 1 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 2 BB, 2 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 2 BB, 2 K",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 7
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 1 BB, 1 SB",
                    day: 3,
                    OP: 4,
                    OPPF: 2,
                    SP: 11
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 2 BB, 1 K",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-3, 1 HR, 3 RBI, 2 BB, 1 K",
                    day: 6,
                    OP: 3,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-4, 1 HR, 3 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 1,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Mike Yastrzemski",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "San Francisco Giants",
            MLBteamAbbrev: "SF",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 213
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1B, HR, 2 RBI, BB, K",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "2-4, 2 HR, 4 RBI, 1 BB, 1 K",
                    day: 4,
                    OP: 4,
                    OPPF: 2,
                    SP: 12
                },
                {
                    line: "1-4, 1 HR, 1 RBI, 1 BB, 1 K",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 1 BB",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 BB",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Trey Mancini",
            pos: "DH",
            posGroup: "OF",
            MLBteam: "Baltimore Orioles",
            MLBteamAbbrev: "BAL",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 214
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Joe Musgrove",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 215
        },
        stats: {
            gameLog: [
                {
                    line: "5 IP, 7 H, 5 ER, 1 BB, 4 K",
                    day: 6,
                    OP: 0,
                    SP: 11
                },
                {
                    line: "4.1 IP, 5 H, 1 ER, 2 BB, 6 K",
                    day: 2,
                    OP: 2,
                    SP: 12
                },
                {
                    line: "7 IP, 3 H, 0 ER, 1 BB, 11 K",
                    day: 7,
                    OP: 7,
                    SP: 13
                },
                {
                    line: "6 IP, 5 H, 1 ER, 1 BB, 8 K",
                    day: 9,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "9 IP, 3 H, 0 ER, 2 BB, 9 K",
                    day: 9,
                    OP: 10,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Nathan Eovaldi",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Boston Red Sox",
            MLBteamAbbrev: "BOS",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 216
        },
        stats: {
            gameLog: [
                {
                    line: "7 IP, 3 H, 1 ER, 1 BB, 10 K",
                    day: 2,
                    OP: 6,
                    SP: 15
                },
                {
                    line: "6.1 IP, 6 H, 3 ER, 2 BB, 9 K",
                    day: 7,
                    OP: 3,
                    SP: 17
                },
                {
                    line: "7 IP, 3 H, 0 ER, 2 BB, 8 K",
                    day: 3,
                    OP: 6,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Brad Hand",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 217
        },
        stats: {
            gameLog: [
                {
                    line: "1.0 IP, 1 H, 1 BB, 2 K, SV",
                    day: 3,
                    OP: 3,
                    SP: 2
                },
                {
                    line: "1.0 IP, BB, SV",
                    day: 2,
                    OP: 2,
                    SP: 3
                },
                {
                    line: "2 IP, 1 H, 0 ER, 2 BB, 1 K",
                    day: 3,
                    OP: 2,
                    SP: 4
                },
                {
                    line: "1 IP, 2 H, 2 ER, 0 BB, 3 K",
                    day: 6,
                    OP: 0,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 1,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 9,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "2 IP, 2 H, 1 ER, 2 BB, 3 K",
                    day: 7,
                    OP: 1,
                    SP: 8
                },
                {
                    line: "1.2 IP, 2 H, 0 ER, 0 BB, 1 K, SV",
                    day: 5,
                    OP: 5,
                    SP: 9
                },
                {
                    line: "1.2 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 8,
                    OP: 5,
                    SP: 10
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 11
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 8,
                    OP: 3,
                    SP: 12
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 2 K",
                    day: 6,
                    OP: 0,
                    SP: 15
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Trevor May",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "New York Mets",
            MLBteamAbbrev: "NYM",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 218
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, HLD",
                    day: 1,
                    OP: 4,
                    SP: 13
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Stephen Strasburg",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Washington Nationals",
            MLBteamAbbrev: "WSN",
            team: "Mighty Megabytes",
            teamAbbrev: "MB",
            id: 219
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Cody Bellinger",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 301
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2B, 1 RBI, BB",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-4, 1 HR, 6 RBI, 1 BB, 1 K",
                    day: 9,
                    OP: 4,
                    OPPF: 3,
                    SP: 7
                },
                {
                    line: "2-3, 1 RBI, 1 BB",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-2, 1 HR, 3 RBI, 1 BB",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "1-3",
                    day: 2,
                    OP: 0,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "2-3, 1 2B, 1 3B, 1 RBI",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "2-5, 2 HR, 4 RBI, 3 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Jose Ramirez",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "Cleveland Guardians",
            MLBteamAbbrev: "CLE",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 302
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2 HR, 4 RBI, K",
                    day: 7,
                    OP: 3,
                    OPPF: 2,
                    SP: 1
                },
                {
                    line: "1-4, HR, 2 RBI, SB",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 1 2B, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-2, 1 2B, 1 HR, 2 RBI, 2 BB",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 4
                },
                {
                    line: "3-3, 3 2B, 1 BB",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "3-5, 1 2B, 1 HR, 4 RBI",
                    day: 6,
                    OP: 4,
                    OPPF: 2,
                    SP: 8
                },
                {
                    line: "2-4, 1 HR, 3 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-5, 1 2B, 1 HR, 5 RBI",
                    day: 8,
                    OP: 4,
                    OPPF: 2,
                    SP: 10
                },
                {
                    line: "1-3, 1 HR, 1 RBI",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "2-4, 1 HR, 1 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-3, 1 3B, 1 HR, 4 RBI, 1 BB",
                    day: 1,
                    OP: 4,
                    OPPF: 2,
                    SP: 13
                },
                {
                    line: "2-4, 1 3B, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "2-4, 1 2B, 1 3B, 1 RBI, 1 BB, 1 SB",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 BB, 1 SB",
                    day: 3,
                    OP: 4,
                    OPPF: 2,
                    SP: 16
                },
                {
                    line: "2-3, 1 2B, 1 HR, 2 RBI, 1 BB",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 17
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 1 BB",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Vladimir Guerrero Jr.",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 303
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, HR, 3 RBI, BB, 2 K",
                    day: 8,
                    OP: 2,
                    OPPF: 1,
                    SP:1
                },
                {
                    line: "2-4, 2 1B, 3 RBI, 2 BB, SB",
                    day: 1,
                    OP: 3,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "3-4, 3 HR, 7 RBI",
                    day: 9,
                    OP: 5,
                    OPPF: 3,
                    SP: 3
                },
                {
                    line: "2-4, 1 2B, 2 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "3-5, 1 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "3-5, 2 HR, 4 RBI, 1 BB, 1 K",
                    day: 6,
                    OP: 4,
                    OPPF: 1,
                    SP: 6
                },
                {
                    line: "4-4, 1 2B, 1 HR, 3 RBI",
                    day: 8,
                    OP: 4,
                    OPPF: 3,
                    SP: 7
                },
                {
                    line: "3-4, 1 2B, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "1-2, 1 HR, 2 RBI, 2 BB, 1 SB",
                    day: 1,
                    OP: 3,
                    OPPF: 1,
                    SP: 9
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 2 BB",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 BB",
                    day: 3,
                    OP: 3,
                    OPPF: 2,
                    SP: 11
                },
                {
                    line: "2-3, 2 HR, 4 RBI, 1 BB, 1 K",
                    day: 4,
                    OP: 4,
                    OPPF: 3,
                    SP: 12
                },
                {
                    line: "2-5, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K, 1 SB",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 2 HR, 4 RBI",
                    day: 3,
                    OP: 4,
                    OPPF: 2,
                    SP: 17
                },
                {
                    line: "3-5, 1 HR, 1 RBI",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "J.D. Martinez",
            pos: "DH",
            posGroup: "OF",
            MLBteam: "Boston Red Sox",
            MLBteamAbbrev: "BOS",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 304
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, HR, 3 RBI, 2 BB",
                    day: 5,
                    OP: 3,
                    OPPF: 2,
                    SP: 1
                },
                {
                    line: "4-6, 1B, 3 HR, 4 RBI, 2 K",
                    day: 2,
                    OP: 5,
                    OPPF: 3,
                    SP: 2
                },
                {
                    line: "3-5, 1 HR, 2 RBI, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "3-4, 2 HR, 4 RBI, 1 K",
                    day: 3,
                    OP: 4,
                    OPPF: 2,
                    SP: 4
                },
                {
                    line: "3-4, 1 RBI, 1 K",
                    day: 7,
                    OP: 0,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-5, 1 HR, 3 RBI, 2 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-3, 1 2B, 2 RBI",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 2 K",
                    day: 8,
                    OP: 0,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "1-4, 1 HR, 2 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-2, 1 2B, 4 RBI, 2 BB",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 1 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 11
                },
                {
                    line: "2-3, 1 2B, 1 HR, 4 RBI, 2 BB, 1 K",
                    day: 1,
                    OP: 4,
                    OPPF: 3,
                    SP: 12
                },
                {
                    line: "4-5, 2 2B, 3 RBI",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "4-4, 1 2B, 2 RBI, 1 BB",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "3-5, 1 2B, 1 HR, 3 RBI",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 17
                },
                {
                    line: "2-5, 1 HR, 2 RBI, 2 K",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Starling Marte",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Oakland Athletics",
            MLBteamAbbrev: "OAK",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 305
        },
        stats: {
            gameLog: [
                {
                    line: "4-5, 3B, 1 RBI, 1 SB",
                    day: 3,
                    OP: 3,
                    OPPF: 2,
                    SP: 1
                },
                {
                    line: "1-3, HR, RBI, 2 BB",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "4-5, 1 2B, 1 HR, 1 RBI",
                    day: 8,
                    OP: 3,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "2-4, 3 RBI, 1 K, 1 SB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-4, 1 HR, 1 RBI, 2 K, 1 SB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "4-6, 1 K",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "3-4, 2 2B, 1 HR, 3 RBI, 1 K",
                    day: 4,
                    OP: 3,
                    OPPF: 2,
                    SP: 12
                },
                {
                    line: "3-4, 1 RBI, 1 BB, 2 SB",
                    day: 3,
                    OP: 2,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "3-4, 1 2B, 1 HR, 1 RBI, 1 SB",
                    day: 3,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "3-4, 1 2B, 2 SB",
                    day: 4,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "3-5, 1 3B, 2 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Marcell Ozuna",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Atlanta Braves",
            MLBteamAbbrev: "ATL",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 306
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, BB",
                    day: 6,
                    OP: 0,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "3-4, 2 1B, HR, 3 RBI, BB",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "0-4, 2 RBI, 1 BB",
                    day: 3,
                    OP: 0,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-4, 1 HR, 4 RBI, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-3, 1 HR, 1 RBI, 2 BB, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "3-5, 2 2B, 1 HR, 2 RBI, 1 BB",
                    day: 6,
                    OP: 4,
                    OPPF: 1,
                    SP: 6
                },
                {
                    line: "1-1, 1 2B, 1 RBI, 1 BB",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Jacob deGrom",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "New York Mets",
            MLBteamAbbrev: "NYM",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 307
        },
        stats: {
            gameLog: [
                {
                    line: "6 IP, 3 H, 0 ER, 7 K, 2 BB",
                    day: 5,
                    OP: 4,
                    SP: 1
                },
                {
                    line: "8 IP, 5 H, 1 ER, 14 K, 0 BB",
                    day: 1,
                    OP: 9,
                    SP: 2
                },
                {
                    line: "9 IP, 2 H, 0 ER, 15 K, 0 BB",
                    day: 5,
                    OP: 10,
                    SP: 3
                },
                {
                    line: "6 IP, 3 H, 1 ER, 1 BB, 9 K",
                    day: 1,
                    OP: 4,
                    SP: 4
                },
                {
                    line: "5 IP, 1 H, 1 ER, 3 BB, 6 K",
                    day: 3,
                    OP: 3,
                    SP: 5
                },
                {
                    line: "6 IP, 2 H, 0 ER, 0 BB, 8 K",
                    day: 7,
                    OP: 5,
                    SP: 7
                },
                {
                    line: "7 IP, 3 H, 0 ER, 1 BB, 11 K",
                    day: 3,
                    OP: 7,
                    SP: 8
                },
                {
                    line: "3 IP, 0 H, 0 ER, 0 BB, 8 K",
                    day: 5,
                    OP: 2,
                    SP: 9
                },
                {
                    line: "5 IP, 1 H, 0 ER, 2 BB, 6 K",
                    day: 1,
                    OP: 3,
                    SP: 10
                },
                {
                    line: "7 IP, 5 H, 3 ER, 0 BB, 14 K",
                    day: 2,
                    OP: 5,
                    SP: 11
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Kenley Jansen",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 308
        },
        stats: {
            gameLog: [
                {
                    line: "1.2 IP, BB, K, SV",
                    day: 3,
                    OP: 5,
                    SP: 1
                },
                {
                    line: "1.0 IP, BB, 3 K, SV",
                    day: 5,
                    OP: 4,
                    SP: 2
                },
                {
                    line: "1.1 IP, BB, 2 K, SV",
                    day: 6,
                    OP: 5,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 0 K",
                    day: 4,
                    OP: 0,
                    SP: 4
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 5,
                    OP: 4,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 7
                },
                {
                    line: "1.1 IP, 0 H, 0 ER, 1 BB, 1 K, SV",
                    day: 7,
                    OP: 4,
                    SP: 8
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 3,
                    OP: 3,
                    SP: 9
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 2 K, SV",
                    day: 9,
                    OP: 4,
                    SP: 10
                },
                {
                    line: "1 IP, 1 H, 0 ER, 1 BB, 2 K, SV",
                    day: 4,
                    OP: 3,
                    SP: 11
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 1 K, SV",
                    day: 2,
                    OP: 3,
                    SP: 13
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 7,
                    OP: 3,
                    SP: 15
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 16
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 17
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Craig Kimbrel",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Chicago White Sox",
            MLBteamAbbrev: "CHW",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 309
        },
        stats: {
            gameLog: [
                {
                    line: "1.2 IP, 3 K, SV",
                    day: 8,
                    OP: 5,
                    SP: 1
                },
                {
                    line: "1.1 IP, 1 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 2
                },
                {
                    line: "1.0 IP, 1 H, 2 BB, 2 K, SV",
                    day: 2,
                    OP: 3,
                    SP: 3 
                },
                {
                    line: "1 IP, 2 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 3,
                    SP: 4
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 8,
                    OP: 5,
                    SP: 5
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 3 K, SV",
                    day: 5,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 8,
                    OP: 5,
                    SP: 7
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 8
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 3 K, SV",
                    day: 2,
                    OP: 4,
                    SP: 9
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 3 K",
                    day: 4,
                    OP: 0,
                    SP: 10
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K",
                    day: 8,
                    OP: 0,
                    SP: 11
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 8,
                    OP: 4,
                    SP: 12
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 3 K, HLD",
                    day: 7,
                    OP: 4,
                    SP: 15
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, HLD",
                    day: 4,
                    OP: 3,
                    SP: 17
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 2 K, HLD",
                    day: 5,
                    OP: 4,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Whit Merrifield",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "Kansas City Royals",
            MLBteamAbbrev: "KC",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 310
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2 1B, RBI, BB, K, SB",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-5, 1 RBI, 2 SB",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 1 BB",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "4-4, 1 2B, 3 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 2,
                    SP: 12
                },
                {
                    line: "3-5, 1 2B, 1 3B, 3 RBI",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 16
                },
                {
                    line: "2-5, 1 HR, 1 RBI, 1 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 17
                },
                {
                    line: "3-5, 2 2B, 1 RBI",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Kris Bryant",
            pos: "3B",
            posGroup: "IF",
            MLBteam: "San Francisco Giants",
            MLBteamAbbrev: "SF",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 311
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-3, 1 RBI, 1 BB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-4, 1 3B, 1 HR, 2 RBI, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 1,
                    SP: 7
                },
                {
                    line: "0-2, 1 RBI, 2 BB",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-4, 1 2B, 1 RBI, 2 BB",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 2 HR, 3 RBI",
                    day: 7,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Cavan Biggio",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 312
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Adam Duvall",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Atlanta Braves",
            MLBteamAbbrev: "ATL",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 313
        },
        stats: {
            gameLog: [
                {
                    line: "1-4, 1 HR, 2 RBI",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "3-4, 1 HR, 4 RBI, 1 K",
                    day: 5,
                    OP: 3,
                    OPPF: 2,
                    SP: 11
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 6,
                    OP: 2,
                    OPPF: 1,
                    SP: 12
                },
                {
                    line: "1-2, 1 2B, 3 RBI, 3 BB",
                    day: 9,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "2-4, 1 2B, 2 RBI",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "1-4, 1 HR, 2 RBI",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 17
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Michael Brantley",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Houston Astros",
            MLBteamAbbrev: "HOU",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 314
        },
        stats: {
            gameLog: [
                {
                    line: "3-5, 1 RBI, 1 K",
                    day: 4,
                    OP: 0,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "3-3, 3 2B, 1 BB",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "4-5, 1 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "1-3, 1 2B, 1 RBI, 2 BB",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "3-4, 1 2B, 1 BB",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Joey Gallo",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "New York Yankees",
            MLBteamAbbrev: "NYY",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 315
        },
        stats: {
            gameLog: [
                {
                    line: "3-4, 2 2B, 1 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "2-4, 2 HR, 3 RBI, 1 BB, 2 K",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Andrew McCutchen",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Philadelphia Phillies",
            MLBteamAbbrev: "PHI",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 316
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, 2 HR, 4 RBI, 2 BB",
                    day: 8,
                    OP: 5,
                    OPPF: 4,
                    SP: 7
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-3, 2 2B, 2 RBI",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 4,
                    OP: 3,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 2 BB",
                    day: 4,
                    OP: 4,
                    OPPF: 2,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Hyun-jin Ryu",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Toronto Blue Jays",
            MLBteamAbbrev: "TOR",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 317
        },
        stats: {
            gameLog: [
                {
                    line: "6 IP, 2 H, 0 ER, 0 BB, 5 K",
                    day: 7,
                    OP: 4,
                    SP: 13
                },
                {
                    line: "7 IP, 7 H, 2 ER, 0 BB, 8 K",
                    day: 3,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "7 IP, 5 H, 0 ER, 1 BB, 5 K",
                    day: 3,
                    OP: 5,
                    SP: 16
                },
                {
                    line: "6 IP, 3 H, 0 ER, 0 BB, 6 K",
                    day: 1,
                    OP: 4,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Kevin Gausman",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "San Francisco Giants",
            MLBteamAbbrev: "SF",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 318
        },
        stats: {
            gameLog: [
                {
                    line: "6 IP, 4 H, 1 ER, 3 BB, 9 K",
                    day: 3,
                    OP: 4,
                    SP: 12
                },
                {
                    line: "5 IP, 4 H, 1 ER, 4 BB, 5 K",
                    day: 2,
                    OP: 2,
                    SP: 15
                },
                {
                    line: "5 IP, 4 H, 2 ER, 1 BB, 7 K",
                    day: 5,
                    OP: 2,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Clayton Kershaw",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 319
        },
        stats: {
            gameLog: [
                {
                    line: "6 IP, 2 H, 2 ER, 1 BB, 8 K",
                    day: 4,
                    OP: 4,
                    SP: 6
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Emilio Pagan",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 320
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 0 K, HLD",
                    day: 9,
                    OP: 3,
                    SP: 12
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 3 K",
                    day: 9,
                    OP: 0,
                    SP: 13
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, HLD",
                    day: 8,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "2 IP, 0 H, 0 ER, 0 BB, 4 K",
                    day: 6,
                    OP: 5,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Jose Alvarado",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Philadelphia Phillies",
            MLBteamAbbrev: "PHI",
            team: "Crazy Cormorants",
            teamAbbrev: "CC",
            id: 321
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 14
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Jose Abreu",
            pos: "1B",
            posGroup: "IF",
            MLBteam: "Chicago White Sox",
            MLBteamAbbrev: "CHW",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 401
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 HR, 4 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 1
                },
                {
                    line: "2-4, 1B, 2B, RBI, K",
                    day: 8,
                    OP: 0,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "3-4, 2 HR, 3 RBI",
                    day: 2,
                    OP: 4,
                    OPPF: 1,
                    SP: 3
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-3, 1 HR, 2 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "1-4, 1 HR, 2 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "2-5, 1 HR, 4 RBI, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 7
                },
                {
                    line: "2-4, 2 2B, 2 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "3-5, 1 2B, 1 RBI",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "0-2, 2 BB, 1 K",
                    day: 9,
                    OP: 0,
                    OPPF: 0,
                    SP: 10 
                },
                {
                    line: "3-5, 1 HR, 4 RBI, 1 K",
                    day: 5,
                    OP: 3,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "3-5, 1 2B, 1 3B, 1 HR, 4 RBI",
                    day: 8,
                    OP: 5,
                    OPPF: 1,
                    SP: 12
                },
                {
                    line: "4-5, 2 2B, 1 HR, 1 RBI",
                    day: 5,
                    OP: 3,
                    OPPF: 1,
                    SP: 15
                },
                {
                    line: "3-5, 1 HR, 4 RBI",
                    day: 6,
                    OP: 3,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "3-4, 2 2B, 1 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 17
                },
                {
                    line: "1-4, 1 HR, 3 RBI, 1 BB, 2 K",
                    day: 5,
                    OP: 1,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Eugenio Suarez",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Cincinnati Reds",
            MLBteamAbbrev: "CIN",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 402
        },
        stats: {
            gameLog: [
                {
                    line: "1-3, HR, 1 RBI, 2 BB, K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-3, 1B, HR, RBI, BB",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "1-5, 1 HR, 2 RBI",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "3-5, 1 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "2-5, 1 2B, 3 RBI, 1 K",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 6
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "1-4, 1 HR, 2 RBI, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "1-4, 1 HR, 2 RBI",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "1-4, 1 HR, 3 RBI, 1 K",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "1-2, 1 2B, 2 RBI, 2 BB, 1 K",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "1-4, 1 HR, 3 RBI, 2 K",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "1-3, 1 HR, 1 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Corey Seager",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 403
        },
        stats: {
            gameLog: [
                {
                    line: "3-5, 2B, 2 RBI, BB",
                    day: 2,
                    OP: 2,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "2-3, 2B, HR, RBI, BB",
                    day: 4,
                    OP: 2,
                    OPPF: 1,
                    SP: 2
                },
                {
                    line: "2-4, 1 HR, 2 RBI, 1 BB, 1 K, 1 SB",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "1-5, 1 3B, 1 RBI, 1 BB, 3 K",
                    day: 4,
                    OP: 0,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "3-4, 1 RBI",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 5
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Mookie Betts",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 404
        },
        stats: {
            gameLog: [
                {
                    line: "2-5, HR, 1 RBI, 2 SB",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "1-5, HR, RBI, K",
                    day: 4,
                    OP: 0,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "1-3, 1 2B, 1 SB",
                    day: 5,
                    OP: 0,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "2-4, 1 2B, 1 HR, 1 RBI, 1 BB",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "2-3, 1 HR, 4 RBI, 3 BB",
                    day: 2,
                    OP: 4,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-5, 2 HR, 2 RBI",
                    day: 4,
                    OP: 3,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-3, 1 HR, 4 RBI",
                    day: 6,
                    OP: 3,
                    OPPF: 2,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Randy Arozarena",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Tampa Bay Rays",
            MLBteamAbbrev: "TB",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 405
        },
        stats: {
            gameLog: [
                {
                    line: "2-3, BB, K",
                    day: 5,
                    OP: 0,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "3-5, 2 1B, HR, RBI, K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 1 HR, 3 RBI, 1 K",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "0-3, 1 BB",
                    day: 4,
                    OP: 0,
                    OPPF: 0,
                    SP: 4
                },
                {
                    line: "1-3, 1 HR, 3 RBI, 2 BB, 1 K",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 5
                },
                {
                    line: "3-4, 2 2B, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 8,
                    OP: 4,
                    OPPF: 2,
                    SP: 6
                },
                {
                    line: "1-3, 1 BB, 1 SB",
                    day: 6,
                    OP: 0,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "3-5, 1 3B, 3 RBI, 1 SB",
                    day: 7,
                    OP: 3,
                    OPPF: 1,
                    SP: 8
                },
                {
                    line: "3-4, 1 HR, 2 RBI, 1 SB",
                    day: 6,
                    OP: 3,
                    OPPF: 2,
                    SP: 9
                },
                {
                    line: "3-4, 1 2B, 1 RBI, 1 BB",
                    day: 6,
                    OP: 2,
                    OPPF: 1,
                    SP: 10
                },
                {
                    line: "1-4, 1 2B, 2 RBI",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "3-5, 2 HR, 2 RBI, 1 K",
                    day: 9,
                    OP: 3,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "2-5, 1 HR, 1 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 13
                },
                {
                    line: "1-3, 1 2B, 1 RBI, 2 BB, 1 K",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "0-0, 1 BB",
                    day: 2,
                    OP: 0,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "3-4, 1 3B, 1 HR, 1 RBI, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Charlie Blackmon",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Colorado Rockies",
            MLBteamAbbrev: "COL",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 406
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 2B, 2 RBI",
                    day: 8,
                    OP: 1,
                    OPPF: 0,
                    SP: 1
                },
                {
                    line: "1-3, 2B, BB",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 2
                },
                {
                    line: "2-4, 1 2B, 2 RBI, 1 BB",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 3
                },
                {
                    line: "3-4, 1 2B, 1 HR, 3 RBI, 1 BB",
                    day: 1,
                    OP: 4,
                    OPPF: 3,
                    SP: 13
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 2 BB",
                    day: 6,
                    OP: 3,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "1-4, 1 HR, 3 RBI",
                    day: 8,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "1-4, 1 HR, 2 RBI",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-4, 1 HR, 4 RBI, 1 K, 1 SB",
                    day: 6,
                    OP: 3,
                    OPPF: 0,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Yu Darvish",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "San Diego Padres",
            MLBteamAbbrev: "SD",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 407
        },
        stats: {
            gameLog: [
                {
                    line: "6 IP, 3 H, 1 ER, 7 K, 1 BB",
                    day: 6,
                    OP: 4,
                    SP: 1
                },
                {
                    line: "7.0 IP, 1 H, 1 ER, 9 K, 2 BB",
                    day: 8,
                    OP: 6,
                    SP: 2
                },
                {
                    line: "7.0 IP, 4 H, 1 ER, 9 K, 3 BB",
                    day: 5,
                    OP: 5,
                    SP: 3
                },
                {
                    line: "6.1 IP, 4 H, 1 ER, 3 BB, 12 K",
                    day: 3,
                    OP: 5,
                    SP: 4
                },
                {
                    line: "4 IP, 2 H, 0 ER, 1 BB, 2 K",
                    day: 6,
                    OP: 2,
                    SP: 5
                },
                {
                    line: "7 IP, 4 H, 0 ER, 0 BB, 10 K",
                    day: 2,
                    OP: 7,
                    SP: 6
                },
                {
                    line: "5 IP, 4 H, 4 ER, 3 BB, 5 K",
                    day: 5,
                    OP: 1,
                    SP: 7
                },
                {
                    line: "7 IP, 3 H, 2 ER, 2 BB, 8 K",
                    day: 7,
                    OP: 5,
                    SP: 8
                },
                {
                    line: "5 IP, 6 H, 4 ER, 2 BB, 5 K",
                    day: 4,
                    OP: 1,
                    SP: 9
                },
                {
                    line: "6 IP, 2 H, 1 ER, 1 BB, 11 K",
                    day: 1,
                    OP: 5,
                    SP: 10
                },
                {
                    line: "6 IP, 6 H, 4 ER, 1 BB, 8 K",
                    day: 4,
                    OP: 2,
                    SP: 11
                },
                {
                    line: "7 IP, 4 H, 2 ER, 0 BB, 12 K",
                    day: 7,
                    OP: 6,
                    SP: 14
                },
                {
                    line: "6 IP, 3 H, 1 ER, 1 BB, 7 K",
                    day: 3,
                    OP: 4,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Josh Hader",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Milwaukee Brewers",
            MLBteamAbbrev: "MIL",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 408
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 3 K",
                    day: 1,
                    OP: 1,
                    SP: 1
                },
                {
                    line: "0.2 IP, 1 K, SV",
                    day: 3,
                    OP: 2,
                    SP: 2
                },
                {
                    line: "1.0 IP, 1 BB, 2 K, SV",
                    day: 6,
                    OP: 4,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 3 K, SV",
                    day: 3,
                    OP: 5,
                    SP: 4
                },
                {
                    line: "1 IP, 1 H, 0 ER, 1 BB, 2 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 7,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 3 K, SV",
                    day: 1,
                    OP: 4,
                    SP: 8
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 3 K, SV",
                    day: 2,
                    OP: 4,
                    SP: 9
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 3,
                    OP: 4,
                    SP: 10
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 9,
                    OP: 4,
                    SP: 11
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 1,
                    OP: 4,
                    SP: 14
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 6,
                    OP: 4,
                    SP: 15
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 3 K, SV",
                    day: 5,
                    OP: 4,
                    SP: 17
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 6,
                    OP: 4,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "James Karinchak",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Cleveland Guardians",
            MLBteamAbbrev: "CLE",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 409
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, BB, K",
                    day: 1,
                    OP: 0,
                    SP: 1
                },
                {
                    line: "1 IP, 1 K, SV",
                    day: 4,
                    OP: 3,
                    SP: 2 
                },
                {
                    line: "1.1 IP, 2 K, SV",
                    day: 9,
                    OP: 4,
                    SP: 3
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, HLD",
                    day: 3,
                    OP: 4,
                    SP: 4
                },
                {
                    line: "1.1 IP, 0 H, 0 ER, 1 BB, 1 K, HLD",
                    day: 5,
                    OP: 4,
                    SP: 5
                },
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 2 K, SV",
                    day: 4,
                    OP: 4,
                    SP: 6
                },
                {
                    line: "1 IP, 1 H, 0 ER, 1 BB, 2 K, SV",
                    day: 1,
                    OP: 3,
                    SP: 7
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 1 K",
                    day: 7,
                    OP: 0,
                    SP: 8
                },
                {
                    line: "1.1 IP, 0 H, 0 ER, 1 BB, 3 K, HLD",
                    day: 3,
                    OP: 5,
                    SP: 9
                },
                {
                    line: "1 IP, 1 H, 0 ER, 0 BB, 0 K, SV",
                    day: 4,
                    OP: 2,
                    SP: 10
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, HLD",
                    day: 6,
                    OP: 4,
                    SP: 11
                },
                {
                    line: "1.1 IP, 1 H, 0 ER, 0 BB, 2 K, HLD",
                    day: 7,
                    OP: 5,
                    SP: 16
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 1
        }
    },
    {
        profile: {
            name: "Wander Franco",
            pos: "SS",
            posGroup: "IF",
            MLBteam: "Tampa Bay Rays",
            MLBteamAbbrev: "TB",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 410
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 2B, 1 3B, 2 RBI, 1 K",
                    day: 8,
                    OP: 2,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "1-5, 1 HR, 1 RBI",
                    day: 7,
                    OP: 1,
                    OPPF: 0,
                    SP: 14
                },
                {
                    line: "2-4, 1 2B, 1 HR, 2 RBI",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 15
                },
                {
                    line: "2-5, 2 2B, 1 RBI",
                    day: 4,
                    OP: 1,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-4, 1 2B, 1 HR, 2 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 0,
                    SP: 17
                },
                {
                    line: "4-6, 1 3B",
                    day: 1,
                    OP: 2,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Brandon Lowe",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "Tampa Bay Rays",
            MLBteamAbbrev: "TB",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 411
        },
        stats: {
            gameLog: [
                {
                    line: "2-4, 1 2B, 2 RBI, 1 BB, 2 K",
                    day: 1,
                    OP: 1,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "2-4, 1 2B, 1 HR, 3 RBI, 1 BB, 1 K",
                    day: 3,
                    OP: 3,
                    OPPF: 2,
                    SP: 10
                },
                {
                    line: "1-3, 1 HR, 4 RBI, 1 BB, 2 K",
                    day: 6,
                    OP: 2,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "2-3, 2 HR, 3 RBI, 1 BB, 1 K",
                    day: 2,
                    OP: 3,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "3-4, 1 HR, 2 RBI",
                    day: 5,
                    OP: 2,
                    OPPF: 1,
                    SP: 13
                },
                {
                    line: "2-5, 1 2B, 1 HR, 5 RBI, 1 BB, 1 K",
                    day: 7,
                    OP: 4,
                    OPPF: 1,
                    SP: 14
                },
                {
                    line: "3-4, 2 HR, 3 RBI",
                    day: 7,
                    OP: 4,
                    OPPF: 2,
                    SP: 15
                },
                {
                    line: "2-4, 1 2B, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 2 BB",
                    day: 3,
                    OP: 3,
                    OPPF: 0,
                    SP: 17
                },
                {
                    line: "2-4, 1 2B, 2 RBI",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Nick Madrigal",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "Chicago Cubs",
            MLBteamAbbrev: "CHC",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 412
        },
        stats: {
            gameLog: [
                {
                    line: "3-5, 1 2B, 1 HR, 2 RBI, 1 BB",
                    day: 2,
                    OP: 3,
                    OPPF: 1,
                    SP: 6
                },
                {
                    line: "2-4, 1 3B, 1 RBI",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-4, 1 HR, 1 RBI",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 8
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Tommy La Stella",
            pos: "2B",
            posGroup: "IF",
            MLBteam: "San Francisco Giants",
            MLBteamAbbrev: "SF",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 413
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Nick Castellanos",
            pos: "RF",
            posGroup: "OF",
            MLBteam: "Cincinnati Reds",
            MLBteamAbbrev: "CIN",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 414
        },
        stats: {
            gameLog: [
                {
                    line: "5-6, 2 HR, 4 RBI",
                    day: 5,
                    OP: 5,
                    OPPF: 3,
                    SP: 4
                },
                {
                    line: "3-5, 1 2B, 1 HR, 3 RBI, 1 BB",
                    day: 9,
                    OP: 4,
                    OPPF: 1,
                    SP: 5
                },
                {
                    line: "3-5, 1 2B, 2 HR, 4 RBI, 1 K",
                    day: 4,
                    OP: 4,
                    OPPF: 2,
                    SP: 6
                },
                {
                    line: "2-3, 1 2B",
                    day: 8,
                    OP: 0,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "2-3, 1 HR, 2 RBI, 1 BB",
                    day: 9,
                    OP: 2,
                    OPPF: 0,
                    SP: 8
                },
                {
                    line: "2-5, 1 2B, 1 RBI, 2 K",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 9
                },
                {
                    line: "3-5, 1 2B, 1 HR, 7 RBI, 2 K",
                    day: 8,
                    OP: 4,
                    OPPF: 3,
                    SP: 10
                },
                {
                    line: "2-3, 1 HR, 3 RBI, 1 K",
                    day: 1,
                    OP: 2,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "2-4, 1 HR, 4 RBI",
                    day: 3,
                    OP: 3,
                    OPPF: 0,
                    SP: 16
                },
                {
                    line: "2-3, 2 HR, 6 RBI, 1 BB",
                    day: 5,
                    OP: 5,
                    OPPF: 2,
                    SP: 17
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB",
                    day: 6,
                    OP: 2,
                    OPPF: 1,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Byron Buxton",
            pos: "CF",
            posGroup: "OF",
            MLBteam: "Milwaukee Brewers",
            MLBteamAbbrev: "MIL",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 415
        },
        stats: {
            gameLog: [
                {
                    line: "5-5, 2 2B, 1 HR, 1 RBI, 1 SB",
                    day: 1,
                    OP: 4,
                    OPPF: 2,
                    SP: 4
                },
                {
                    line: "2-5, 1 HR, 1 RBI",
                    day: 6,
                    OP: 1,
                    OPPF: 0,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Jesse Winker",
            pos: "LF",
            posGroup: "OF",
            MLBteam: "Cincinnati Reds",
            MLBteamAbbrev: "CIN",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 416
        },
        stats: {
            gameLog: [
                {
                    line: "4-4, 3 HR, 3 RBI, 1 BB",
                    day: 6,
                    OP: 5,
                    OPPF: 3,
                    SP: 6
                },
                {
                    line: "4-5",
                    day: 2,
                    OP: 1,
                    OPPF: 0,
                    SP: 7
                },
                {
                    line: "3-4, 3 HR, 6 RBI, 1 BB",
                    day: 4,
                    OP: 5,
                    OPPF: 3,
                    SP: 8
                },
                {
                    line: "2-3, 2 2B, 2 RBI",
                    day: 2,
                    OP: 2,
                    OPPF: 1,
                    SP: 9
                },
                {
                    line: "1-3, 1 HR, 2 RBI, 1 BB, 1 K",
                    day: 9,
                    OP: 1,
                    OPPF: 0,
                    SP: 10
                },
                {
                    line: "1-2, 1 BB",
                    day: 1,
                    OP: 0,
                    OPPF: 0,
                    SP: 11
                },
                {
                    line: "3-6, 2 2B, 2 RBI",
                    day: 7,
                    OP: 2,
                    OPPF: 0,
                    SP: 12
                },
                {
                    line: "3-4, 1 2B, 1 HR, 4 RBI",
                    day: 2,
                    OP: 4,
                    OPPF: 3,
                    SP: 13
                },
                {
                    line: "3-5, 1 2B, 1 HR, 6 RBI",
                    day: 7,
                    OP: 5,
                    OPPF: 2,
                    SP: 14
                },
                {
                    line: "3-4, 1 2B, 1 HR, 4 RBI",
                    day: 3,
                    OP: 4,
                    OPPF: 2,
                    SP: 15
                },
            ],
            AVG: 0,
            TotalOP: 0,
            OPdiff: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Walker Buehler",
            pos: "SP",
            posGroup: "SP",
            MLBteam: "Los Angeles Dodgers",
            MLBteamAbbrev: "LAD",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 417
        },
        stats: {
            gameLog: [
                {
                    line: "7.1 IP, 5 H, 1 ER, 1 BB, 9 K",
                    day: 9,
                    OP: 6,
                    SP: 12
                },
                {
                    line: "7 IP, 3 H, 0 ER, 2 BB, 8 K",
                    day: 6,
                    OP: 6,
                    SP: 13
                },
                {
                    line: "7 IP, 4 H, 1 ER, 3 BB, 10 K",
                    day: 5,
                    OP: 5,
                    SP: 15
                },
                {
                    line: "6.2 IP, 3 H, 0 ER, 1 BB, 8 K",
                    day: 7,
                    OP: 5,
                    SP: 16
                },
                {
                    line: "7 IP, 4 H, 2 ER, 2 BB, 5 K",
                    day: 4,
                    OP: 4,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Alex Reyes",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "St Louis Cardinals",
            MLBteamAbbrev: "STL",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 418
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 1 BB, 2 K, SV",
                    day: 9,
                    OP: 4,
                    SP: 12
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 0 K, SV",
                    day: 5,
                    OP: 3,
                    SP: 13
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 6,
                    OP: 3,
                    SP: 14
                },
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 1 K, SV",
                    day: 1,
                    OP: 3,
                    SP: 15
                },
                {
                    line: "1 IP, 1 H, 0 ER, 1 BB, 3 K, HLD",
                    day: 8,
                    OP: 4,
                    SP: 18
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Ian Kennedy",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Philadelphia Phillies",
            MLBteamAbbrev: "PHI",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 419
        },
        stats: {
            gameLog: [
                {
                    line: "1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 5,
                    OP: 4,
                    SP: 13
                },
                {
                    line: "1.1 IP, 0 H, 0 ER, 0 BB, 2 K, SV",
                    day: 2,
                    OP: 5,
                    SP: 16
                },
                {
                    line: "2 IP, 0 H, 0 ER, 0 BB, 4 K",
                    day: 9,
                    OP: 5,
                    SP: 17
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Jordan Hicks",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "St Louis Cardinals",
            MLBteamAbbrev: "STL",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 420
        },
        stats: {
            gameLog: [
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
    {
        profile: {
            name: "Peter Fairbanks",
            pos: "RP",
            posGroup: "RP",
            MLBteam: "Tampa Bay Rays",
            MLBteamAbbrev: "TB",
            team: "Slim Aliens",
            teamAbbrev: "SA",
            id: 421
        },
        stats: {
            gameLog: [
                {
                    line: "1.1 IP, 0 H, 0 ER, 0 BB, 3 K, HLD",
                    day: 2,
                    OP: 5,
                    SP: 12
                },
            ],
            AVG: 0,
            TotalOP: 0,
            games: 0
        }
    },
];

const injuredList = [
    "Ronald Acuna Jr.",
    "Xander Bogaerts",
    "Nick Madrigal",
    "Jesse Winker",
    "Shane Bieber",
    "Rafael Montero",
    "Adalberto Mondesi",
    "Greg Holland",
    "Mike Trout",
    "Anthony Rendon",
    "Clayton Kershaw",
    "Jacob deGrom",
    "Trevor Rosenthal",
    "Drew Pomeranz",
    "Jordan Hicks",
    "Cavan Biggio",
    "Stephen Strasburg",
    "Lucas Giolito",
    "Tim Anderson"
];
const reservedList = [
    "Marcell Ozuna",
    "Trevor Bauer",
    "Brad Hand",
    "Peter Fairbanks",
    "Tommy La Stella",
    "Jazz Chisholm Jr.",
    "Yermin Mercedes",
    "Jeff McNeil",
    "Bo Bichette",
    "Matt Olson",
    "Kyle Tucker",
    "Michael Brantley",
    "Trey Mancini",
    "Michael Conforto",
    "Andrew Benintendi",
    "Mark Canha",
    "A.J. Puk",
    "Freddy Peralta"
];

const calculateAVG = (array) => {
    let OParray = [];
    array.map(game => {
        return OParray.push(game.OP);
    })
    const AVG = ([...OParray].reduce((a,b) => a+b, 0))/ OParray.length
    if (!AVG) {return 0}
    return AVG.toFixed(2);
};

const calculateTotals = (array) => {
    let OParray = [];
    array.map(game => {
        return OParray.push(game.OP);
    })
    const Total = [...OParray].reduce((a,b) => a+b, 0);
    if (!Total) {return 0}
    return Total;
};

const calculateTotalLT = (array) =>{
    let OParray = [];
    array.map(game => {
      return OParray.push(game.OPPF)
    });
    const Total = ([...OParray].reduce((a,b) => a+b, 0))
    return Total;
};
const calculateGames = (array) =>{
    let GamesArray = [];
    array.map(game => {
      return GamesArray.push(game.OP)
    });
    const Games = GamesArray.length;
    return Games;
};

const toggleInjured = (array, injured, reserved) => {
    const updateArray = [...array].map((player => {
      if (injured.includes(player.profile.name)) {
        player.profile.activity= "injured";
      }
      else if (reserved.includes(player.profile.name)) {
        player.profile.activity= "reserved";
      }
      else {
        player.profile.activity= "active";
      }
      return player;
    }))
    return updateArray;
  }

const adjustPlayers = (array) => {
  const newArray = [...array].map(player => {
    player.stats.AVG = calculateAVG(player.stats.gameLog);
    player.stats.OPdiff = calculateTotalLT(player.stats.gameLog);
    player.stats.TotalOP = calculateTotals(player.stats.gameLog);
    player.stats.games = calculateGames(player.stats.gameLog);
    return player;
  })
  return newArray;
}

const statAdjustPlayers = adjustPlayers(rawPlayers);
const Players= toggleInjured(statAdjustPlayers, injuredList, reservedList);
export default Players;