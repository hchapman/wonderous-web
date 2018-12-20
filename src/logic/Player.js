import {Score, CoinScore} from "./ScoreDatum.js";
import GameConfig from "./GameConfig.js";

export default class Player {
    constructor(name, wonder) {
        this.name = name;
        this.wonder = wonder;
        this.scores = {};
        for (let cat of GameConfig.getAllCategories()) {
            this.scores[cat.id] = GameConfig.newScore(cat.id);
        }
    }

    getTotalScore() {
        let total = 0;
        for (let key in this.scores) {
            total += this.scores[key].points;
        }
        return total;
    }
}
