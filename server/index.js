const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//connect to database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('mongodb connected...'))
.catch(() => console.log('not connected'));

//import router
const authRoute = require('./routes/auth');

//App middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//app.use(cors());
if((process.env.NODE_ENV = 'development')){
    app.use(cors({ origin: `http://localhost:3000` }))
}

// middleware
app.use('/api', authRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on ${port} - ${process.env.NODE_ENV}`));