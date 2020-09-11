//importing
const express= require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express();
//app config

dotenv.config();

//import routes
const authRoute = require('./routes/auth');

//middlewares
app.use(express.json());

//route middleware

app.use('/api/user', authRoute);

//db config
mongoose.connect('mongodb', 
{ useNewUrlParser: true },
()=> console.log('connected to db'));

//listen
app.listen(9000, ()=> console.log("server is running"))
