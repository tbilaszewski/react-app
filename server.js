const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const cors = require('cors');
const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost/database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose has connected');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', routes);

app.listen(PORT, console.log(`Server is starting at ${PORT}`));