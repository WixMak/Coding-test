const express = require('express');
const http = require('http');
const https = require('https');

const FunctionRouter = require('./route/function-route');

const app = express();
const port = 8080;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-type, Authorization");
    next();
});

app.use(express.static('public'));

app.use('/api/functions', FunctionRouter);

// app.get('/fetchCategories.js', (req, res) => {
//     res.sendFile(__dirname + '/fetchCategories.js');
// })

const getInternetConnectionStatus = (uri) => {
    const options = new URL(uri);
    const protocol = options.protocol === 'https:' ? https : http;
}



//Server connection
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})