const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Create a sign in registration route to handle new user registration

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', async (req, res) => {
    console.log('Made it to post route');
    try {
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        console.log('I created the user in db');
        req.session.save(() => {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;
            req.session.user = newUser;
            res.status(200).json(newUser);
            //res.redirect('/');
            return;
            
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        // Check if the user is logged in
        if (req.session.logged_in) {
            // Render the dashboard.handlebars for logged-in users
            res.render('dashboard', {
                loggedIn: req.session.logged_in,
                user: req.session.user
            });
        } else {
            // Render the home.handlebars for non-logged in users
            res.render('home', {
                loggedIn: req.session.logged_in,
            });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;