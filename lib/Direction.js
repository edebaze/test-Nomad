const Point = require("./Point");

class Direction {
    /**
     * @param {String} cardinalDirection represents by one of the following character: "N", "E", "W" or "S"
     * @throws {Error} if the cardinal direction is unknown
     */
    constructor (cardinalDirection) {
        let upperDirection = cardinalDirection.toUpperCase();

        this.cardinalClockwiseDirections = ["N", "E", "S", "W"];
        this.cardinalIndex = this.cardinalClockwiseDirections.indexOf(upperDirection);

        if (this.cardinalIndex === -1) {
            throw new Error(`unknown cardinal direction: ${cardinalDirection}`);
        }
    }

    turnClockwise () {
        this.cardinalIndex += 1;

        // 4 === this.cardinalClockwiseDirections.length
        if (this.cardinalIndex >= 4) this.cardinalIndex = 0;
    }

    turnCounterClockwise () {
        this.cardinalIndex -= 1;

        // go back to the last item index (this.cardinalClockwiseDirections.length - 1)
        if (this.cardinalIndex < 0) this.cardinalIndex = 3;
    }

    getCardinalDirection () {
        return this.cardinalClockwiseDirections[this.cardinalIndex];
    }

    /**
     * Determines the vector for the specified direction
     *
     * @returns {Point}
     * @throws {Error} in case the direction is not a cardinal direction
     */
    getVector () {
        let vector;
        let cardinalDirection = this.getCardinalDirection();

        switch (cardinalDirection) {
            case "N":
                vector = new Point(0, 1);
                break;
            case "E":
                vector = new Point(1, 0);
                break;
            case "S":
                vector = new Point(0, -1);
                break;
            case "W":
                vector = new Point(-1, 0);
                break;
        }

        return vector;
    }
}

module.exports = Direction;
