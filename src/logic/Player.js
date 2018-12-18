import {Score, CoinScore} from "./ScoreDatum.js";

export default class Player {
    constructor(name) {
        this.name = name;
        this.scores = [
            new Score(0),
            new CoinScore(7),
            new Score(10),
            new Score(13),
            new Score(4)
        ];
    }

    getTotalScore() {
        let total = 0;
        for (let score of this.scores) {
            total += score.points;
        }
        return total;
    }
}
