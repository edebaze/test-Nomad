class Point {
    /**
     * Representation of the position of an object
     *
     * @param {Number} x
     * @param {Number} y
     */
    constructor (x, y) {
        // ensures that its a number
        this.x = parseInt(x, 10);
        this.y = parseInt(y, 10);
    }
}

module.exports = Point;
