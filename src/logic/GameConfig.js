import {Score, CoinScore, ScienceScore} from "./ScoreDatum.js";

class GameScoreCategory {
    static strings = {
        military: "Military",
        money: "Money",
        wonder: "Wonder",
        civic: "Civic",
        commerce: "Commerce",
        science: "Science",
        guild: "Guild"
    }

    constructor(id) {
        this.id = id;
    }

    static generateCategories() {
        let cats = [];
        for (let catid in GameScoreCategory.strings) {
            cats.push(new GameScoreCategory(catid));
        }
        return cats;
    }

    /* Return a localized, human-readable name for this category
     */
    toString() {
        return GameScoreCategory.strings[this.id];
    }
}

class GameWonder {
    static strings = {
        alexandria: "Alexandria",
        babylon: "Babylon",
        ephesos: "Ephesos",
        giza: "Giza",
        halikarnassos: "Halikarnassos",
        olympia: "Olympia",
        rhodos: "Rhodos"
    }

    constructor(id) {
        this.id = id;
    }

    static generateWonders() {
        let wonders = [];
        for (let wonderid in GameWonder.strings) {
            wonders.push(new GameWonder(wonderid));
        }
        return wonders;
    }

    /* Return a localized, human-readable name for this wonder
     */
    toString() {
        return GameWonder.strings[this.id];
    }
}

export default class GameConfig {
    static allCategories = GameScoreCategory.generateCategories();
    static allWonders = GameWonder.generateWonders();

    constructor() {
    }

    // Return categories for current game config
    getCategories() {
        return GameConfig.allCategories;
    }

    /* Return wonders for current game config
     */
    getWonders() {
        return GameConfig.allWonders;
    }

    // Return all categories available in game
    static getAllCategories() {
        return GameConfig.allCategories;
    }

    /* Return all wonders available in game
     */
    static getAllWonders() {
        return GameConfig.allWonders;
    }

    /* Factory to create appropriate score types
     */
    static newScore(catid) {
        if (catid == 'money') {
            return new CoinScore(0);
        } else if (catid == 'science') {
            return new ScienceScore(0,0,0,0);
        }

        return new Score(0);
    }
}
