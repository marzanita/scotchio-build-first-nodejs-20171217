// require express
var express = require('express');
var path = require('path');

//create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage

router.get('/', function(req, res) {
    res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
    var users = [
        {name: 'Ann', email: 'annmartinez@knights.ucf.edu', avatar:'https://media.giphy.com/media/l1JLIJE0VXuxYRrri/giphy.gif'},
        {name: 'Javier', email: 'javieraguilu@knights.ucf.edu', avatar:'https://media.giphy.com/media/l41Ym8O8dbIG0XvFK/giphy.gif'},
        {name: 'Kristina', email: 'kristina@knights.ucf.edu', avatar:'https://media.giphy.com/media/3ohs7WiI1NF8Y3sHFm/giphy.gif'}
    ];

    res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
    res.render('pages/contact');
});
router.post('/contact', function(req, res) {
   res.send('Thanks for contacting us. ' + req.body.name + '! We will respond shortly!');

});