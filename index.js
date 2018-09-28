const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const path=require('path');
const passport=require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');



// Connect To Database
mongoose.connect(config.database,{ useNewUrlParser: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

var userController=require('./controllers/userController.js');
var viewController=require('./controllers/viewController.js');
//var matchController=require('./controllers/matchController.js');

var app=express();
// Body Parse Middleware
app.use(bodyParser.json());

//CORS middleware
app.use(cors());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);
// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});


//Set static folder
app.use(express.static(path.join(__dirname,'public')));

//port number
const port=process.env.PORT || 8080;

//start server
app.listen(port,()=> console.log('Server started at port:3000'));

app.use('/users', userController);
app.use('/views', viewController);
