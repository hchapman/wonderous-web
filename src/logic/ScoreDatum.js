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

export class ScienceScore extends Score {
    constructor(a,b,c,w) {
        super(0);
        this.rawA = a;
        this.rawB = b;
        this.rawC = c;

        this.rawW = w;
    }

    /* partition n into k natural numbers (>= 0)
     */
    static _partitions(n, k) {
        if (k == 0 || n < 0) { return [[],]; }
        if (k == 1) { return [[n],]; }

        let parts = [];
        for (let x = 0; x <= n; x++) {
            for (let part of ScienceScore._partitions(n-x,k-1)) {
                parts.push([x].concat(part));
            }
        }
        return parts;
    }

    get valueA() { return this.rawA; }
    get valueB() { return this.rawB; }
    get valueC() { return this.rawC; }
    get valueW() { return this.rawW; }

    set valueA(a) { this.rawA = a; }
    set valueB(b) { this.rawB = b; }
    set valueC(c) { this.rawC = c; }
    set valueW(w) { this.rawW = w; }

    static _calcScience(a,b,c) {
        return 7*Math.min(a,b,c) + a*a + b*b + c*c;
    }

    get points() {
        // Maybe the naive method is not too expensive, so let's try.
        return Math.max(...ScienceScore._partitions(this.rawW,3).map(
            ([wa,wb,wc]) => ScienceScore._calcScience(
                this.rawA+wa,
                this.rawB+wb,
                this.rawC+wc)
        ) );
    }
}
