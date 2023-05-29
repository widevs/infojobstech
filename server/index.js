const http = require('http');

require('dotenv').config();

const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
    console.log(`Server listening on port ${port}`);
});

connect_to_db();

async function connect_to_db() {
    try {
        await mongoose.connect(process.env.DB_URL);
    } catch (error) {
        res.status(500).send('Internal Server Error while connecting to db.');
    }
}


