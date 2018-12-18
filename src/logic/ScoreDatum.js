export class Score {
    constructor(points) {
        this.rawPoints = parseInt(points);
    }

    get points() {
        return this.rawPoints;
    }

    get value() {
        return this.rawPoints;
    }

    set value(points) {
        this.rawPoints = parseInt(points) || 0;
    }

    toString() {
        return points;
    }
}

export class CoinScore extends Score {
    get points() {
        if (this.rawPoints >= 0)
            return Math.floor(this.rawPoints/3);
        else
            return Math.ceil(this.rawPoints/3);
    }
}
