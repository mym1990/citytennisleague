const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const users = [
    {
        id: 0,
        firstName: 'Stas',
        lastName: 'Christiansen',
        email: 'test@email.com',
        city: 'Nashville',
        state: 'TN'
    },
    {
        id: 1,
        firstName: 'Bob',
        lastName: 'Myers',
        email: 'test2@email.com',
        city: 'Atlanta',
        state: 'GA'
    }

];

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;

    users.push(newUser);
    res.send(newUser);
});

app.use(function(req, res) {
   res.sendFile('/Users/staschristiansen/citytennisleague/client/src/App.js')
});

const server = app.listen('8081', function() {
    "use strict";
    console.log('server up and running');
});0.
