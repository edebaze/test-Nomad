class Lawn {
    /**
     * Representation of a rectangle lawn using a bottom-left system
     * assuming that the origin is at (0, 0)
     *
     * @param {Number} width
     * @param {Number} height
     */
    constructor (width, height) {
        this.width = parseInt(width, 10);
        this.height = parseInt(height, 10);
    }

    /**
     * Check if the specified point is inside this surface
     *
     * @param {Point} coordinate
     * @returns {Boolean}
     */
    contains (coordinate) {
        return coordinate.x >= 0 &&
            coordinate.y >= 0 &&
            coordinate.x <= this.width &&
            coordinate.y <= this.height;
    }
}

module.exports = Lawn;
