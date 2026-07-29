const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


const app = express();

// enables cors
app.use(cors());
// security
app.use(helmet());

// logging
app.use(morgan('dev'));

// Parse json request bodies
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        success: 'true',
        message: 'Banking API is running'
    })
})

module.exports = app;