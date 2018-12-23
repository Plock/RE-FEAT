const express = require('express');
const passport = require('passport');

const router = express.Router();

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
}

router.get('/login', (req, res) => {
  res.render('login', {
    title: 'RE:FEAT Login',
    message: req.flash('loginMessage'),
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

router.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'RE:FEAT Signup',
    message: req.flash('signupMessage'),
  });
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/signup',
  failureFlash: true,
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
