/**
     * @param {Array}               ----   params
 * @returns {String || Boolean}     ----   error
 *                 if no errors, then return error = false
 *                 if errors, then return error = string
 *
 */


function verify (params) {
    // -------------------------------------------------- VARIABLES
    var error = false
    var lawn = params[0]
    var mowers = params[1]


    // -------------------------------------------------- TESTS (verify each values)

    // LAWN
    if(lawn.X < 0 || lawn.Y < 0 ) error = "Please enter positive values"

    for (let i = 0; i<mowers.X.length; i++) {

        console.log('X = ', mowers.X[i])
        console.log('Y = ', mowers.Y[i])

        // MOWERS
        if (isNaN(mowers.X[i]) ||isNaN (mowers.Y[i])) {
            error = "Please, only enter positive number in the X / Y section"
        } else if(mowers.X[i] < 0 || mowers.Y[i] < 0 ) {
            error = "Please enter only positive values"
        } else if(lawn.X < mowers.X[i] || lawn.Y < mowers.Y[i]) {
            error = "A mower can't be placed outside the lawn, please try again"
        } else {

            // CARDINAL
            const cardinal = ["N", "E", "S", "W"];
            var testCardinal = false;

            for (let j=0; j<cardinal.length; j++) {
                if(mowers.Cardinal[i].toUpperCase() === cardinal[j]) {
                    testCardinal = true;
                }
            }

            if(!testCardinal) error = 'Please enter a correct Cardinal (N = North, E = Est, S = South, W = West)'

        }




    }

    return error

}

module.exports = verify;