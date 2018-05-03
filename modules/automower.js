const Lawn = require("../lib/Lawn");
const Direction = require("../lib/Direction");
const Point = require("../lib/Point");




/**
 * @param {Array}    ----   params
 * @returns {Object} ----   mowers { mower1, mower2... }
 *                  mower : {Integer} X
 *                          {Integer} Y
 *                          {String}  Cardinal
 *
 */


function automower (params) {
    let mowers = [];

    // -------------------------------------------------- VARIABLES
    var lawn = new Lawn(params[0].X, params[0].Y)
    var mowersParams = params[1]



    // -------------------------------------------------- MOWERS'S MOOVEMENTS (async)
    for(let j=0; j<mowersParams.X.length; j++) {

        var position = new Point(mowersParams.X[j], mowersParams.Y[j])
        var direction = new Direction(mowersParams.Cardinal[j])

        if (mowersParams.X.length === 1) {
           var moovement = mowersParams.Moovement.split('')
        }  else {
            var moovement = mowersParams.Moovement[j].split('')
        }

        for(let h=0; h<moovement.length; h++) {
            if(moovement[h] === 'G') {
                direction.turnCounterClockwise()
            }

            if(moovement[h] === 'D') {
                direction.turnClockwise()
            }

            if(moovement[h] === 'A') {
                position.x += direction.getVector().x
                position.y += direction.getVector().y

                if(!lawn.contains(position)) {
                    position.x -= direction.getVector().x
                    position.y -= direction.getVector().y
                }
            }
        }

        var mower = {
            x           : position.x,
            y           : position.y,
            cardinal    : direction.getCardinalDirection()
        }

        mowers.push(mower);
    }

    return mowers

}

module.exports = automower;