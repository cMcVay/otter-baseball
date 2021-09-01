import './App.css';
import React from 'react';

function Rules() {
    return (
        <div className="Rules">
            <h1>Rules</h1>
            <h2>Roster</h2>
            <p><em>Starters</em></p>
            <ul>
                <li>3 Infielders (includes Catchers)</li>
                <li>3 Outfielders (includes Designated Hitters)</li>
                <li>1 Starting Pitcher</li>
                <li>2 Relief Pitchers</li>
            </ul>
            <p><em>Bench</em></p>
            <ul>
                <li>2 Infielders</li>
                <li>2 Outfielders</li>
                <li>1 Starting Pitcher</li>
                <li>2 Relief Pitchers</li>
            </ul>
            <p><em>Injured</em></p>
            <ul>
                <li>Unlimited Spots for players on Injured List</li>
            </ul>
            <p><em>Reserved</em></p>
            <ul>
                <li>Unlimited Spots for Uninjured Players that cannot fit on Active Roster</li>
            </ul>
            <h2>Draft</h2>
            <p>Teams will be drafted in a random order and the rounds will be 'snaking.' It will consist of 16 rounds. The draft will take place offline and those who cannot attend will be auto drafted.</p>
            <h2>Lineup</h2>
            <p>Lineup automatically adjusts to the optimal lineup for active players each scoring period. You may (1) move reserved players to the active roster, (2) add free agent players to active roster when a player on your roster gets hurt*.</p>
            <p>*If active player is injured, and no reserved player can take their spot, then you may add a free agent.</p>
            <h2>Scoring</h2>
            <p>Scoring Period (SP) = 9 days</p>
            <p>Every game, a player accumulates Otter Points (OP). Of the 9 days in the SP, the game in which a player gets the most OP counts towards the current matchup. Pitcher OPs are used to calculate a Pitching Factor (PF) that is applied to the opponent's hitter's OP totals.</p>
            <p>The team with the most Lutra Tallies (LT) each matchup wins. LT are calculated by taking each hitter's OP and applying the PF, then finding the sum of the LTs.</p>
            <h3>OP Calculations for Hitters</h3>
            <p><em>Stats that go into OP</em></p>
            <ul>
                <li>1B = .1</li>
                <li>2B = .2</li>
                <li>3B = .3</li>
                <li>HR = .3</li>
                <li>RBI= .1</li>
                <li>K  =-.1</li>
                <li>BB = .1</li>
                <li>SB = .1</li>
            </ul>
            <p><em>The ranges for the sum of those stats are:</em></p>
            <ul>
                <li>0 OP: sum is less than .4</li>
                <li>1 OP: sum is .4 or .5</li>
                <li>2 OP: sum is .6 or .7</li>
                <li>3 OP: sum is .8 or .9</li>
                <li>4 OP: sum is 1.0 or 1.1</li>
                <li>5 OP: sum is 1.2 or greater</li>
            </ul>
            <h3>OP Calculations for Pitchers</h3>
            <p><em>Stats that go into OP</em></p>
            <ul>
                <li>IP =  1 (.3 per Out)</li>
                <li>H  =-.1</li>
                <li>K  = .2</li>
                <li>ER =-.5</li>
                <li>BB =-.1</li>
                <li>SV =  1</li>
                <li>HLD=  1</li>
            </ul>
            <p><em>The Starting Pitcher ranges for the sum of those stats are:</em></p>
            <ul>
                <li>0 OP: sum is less than 3</li>
                <li>1 OP: sum is 3.0 to 3.9</li>
                <li>2 OP: sum is 4.0 to 4.9</li>
                <li>3 OP: sum is 5.0 to 5.9</li>
                <li>4 OP: sum is 6.0 to 6.9</li>
                <li>5 OP: sum is 7.0 to 7.9</li>
                <li>6 OP: sum is 8.0 to 8.4</li>
                <li>7 OP: sum is 8.5 to 8.9</li>
                <li>8 OP: sum is 9.0 to 9.4</li>
                <li>9 OP: sum is 9.5 to 9.9</li>
                <li>10OP: sum is 10 or greater</li>
            </ul>
            <p><em>The Relief Pitcher ranges for the sum of those stats are:</em></p>
            <ul>
                <li>0 OP: sum is less than 1.6</li>
                <li>1 OP: sum is 1.6 or 1.7</li>
                <li>2 OP: sum is 1.8 or 1.9</li>
                <li>3 OP: sum is 2.0 to 2.2</li>
                <li>4 OP: sum is 2.2 to 2.5</li>
                <li>5 OP: sum is 2.6 or greater</li>
            </ul>
            <h3>PF Calculation</h3>
            <p>The OP for the Starting Pitcher and two Relief Pitchers are add together</p>
            <p><em>Pitching Factor ranges for the sum are:</em></p>
            <ul>
                <li>0 PF: sum is less than 5</li>
                <li>1 PF: sum is 5 to 9</li>
                <li>2 PF: sum is 10 to 14</li>
                <li>3 PF: sum is 15 to 19</li>
                <li>4 PF: sum is 20</li>
            </ul>
            <h3>TieBreakers</h3>
            <p>Ties in LT are broken first by which team has the most hitter OP. Then the tie is broken by the team with the most OP pitchers included. If still tied, the home team is given a bonus LT and awarded the victory.</p>
            <p>Ties in the standings are first broken by which team has the better record head to head. Next, the team with the most total OP for the season gets placed ahead the other.</p>
            <h2>Schedule</h2>
            <p>There are 20 Scoring Periods. Each team plays every other team 4 times (2H 2A).</p>
            <p>The championship is the between the top two finishers by record.</p>
            <p>The lineups for the championship will be comprised of the best performances on each team. Scoring will be adjusted to offer more nuance to game scores (for example, hitter OP will be in a 0-10 range instead of 0-5)</p>
        </div>
    )
};

export default Rules;