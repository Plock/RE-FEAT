/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '#$#$Project #$$#RE:FEAT$##$',
  resave: false,
  saveUninitialized: true,
}));

passport.use(new LocalStrategy(
  ((username, password, done) => {
    User.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }),
));

app.use('/', indexRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
