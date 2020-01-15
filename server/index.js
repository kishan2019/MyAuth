const express = require('express');
const app = express();

//import router
const authRoute = require('./routes/auth');

// middleware
app.use('/api', authRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`server is running on ${port}`));