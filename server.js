
const express = require('express');
// Instancia express
const app=express();

const http = require('http');
const server = http.createServer(app);

const logger = require('morgan');

const cors = require('cors');

const user = require('./routes/user_routes')

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.disable('x-powered-by');

app.set('port', port);

user(app);

// Run server
server.listen(port, '172.16.101.217' || 'localhost', function(){
    console.log('[ Server is up! ] [PROCESS ID: ', process.pid+'] [PORT: ', port+']')
});

// First route
app.get('/', (req, res)=>{
    res.send('Index');
})

// First control error
app.use((err, req, res, next)=>{
    console.log('ERROR: [', err+']');
    res.status(err.status || 500).send(err.stack);
});