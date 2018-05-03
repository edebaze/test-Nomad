// ----------------------------------------------------------------- DECLARATION

// NPM modules
var express         = require('express');
var path            = require('path');
let bodyParser      = require("body-parser");

// Personals modules
let automower       = require ('./modules/automower');
let verify          = require ('./modules/verify');

// Variables
var indexRouter     = require('./routes/index');
var app             = express();






// ----------------------------------------------------------------- VIEW SETUP

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');




// ----------------------------------------------------------------- MIDDLEWARE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));




// ----------------------------------------------------------------- ROUTING

/* GET Home Page */
app.use('/', indexRouter);


/* POST test page. */
app.post('/test', function(req, res) {

    // Save Params
    var params = []

    params.push(req.body.lawn)
    params.push(req.body.mowers)


    // Verification Params
    var error = verify(params)
    if(error) {
        res.render('index', {
            error : error
        });
    }

    else {
        console.log(params)
        var mowers = automower(params);
        console.log(mowers)

        res.render('test', {
            mowers : mowers
        });

    }
});


// ----------------------------------------------------------------- End Of Routing

module.exports = app;



