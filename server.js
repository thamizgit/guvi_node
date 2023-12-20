require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connDB');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3500;
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors());
app.use(express.json());

connectDB();

app.use('/register',require('./routes/register'));
app.use('/login',require('./routes/login'));

app.use('/update',require('./routes/update'));

mongoose.connection.once('open',() => {
    app.listen(PORT, ()=> {
        console.log(`Server running on PORT ${PORT}`);
        console.log('MongoDB connected');
    })
})