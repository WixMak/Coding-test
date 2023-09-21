const http = require('http');
const https = require('https');
const { URL } = require('url');

const getInternetConnectionStatus = (host, callback) => {
    let uri_protocol;

    //Get the uri protocol
    try {
        const uri = new URL(host);
        uri_protocol = uri.protocol;
    } catch (err) {
        callback(null, 'Error');
    }

    const use_protocol =  uri_protocol === "https:" ? https : http;

    let result_status, timeout;
    const start_time = new Date().getTime();

    const req = use_protocol.get(host, (res) => {
        const end_time = new Date().getTime();
        const response_time = end_time - start_time;

        //All the successful status should send Good or find
        if (res.statusCode >= 200 && res.statusCode <= 299) {
            //Check the Response time and set result_status
            if (response_time <= 500) {
                result_status =  'Good';
            } else if (response_time > 500 && response_time < 5000 ){
                result_status =  'Fine';
            }
            else {
                result_status = 'Terrible';
            }
        } else {
            result_status = 'Terrible';
        }
        callback(result_status);

        //Clear the timeout when it callbacks the result_status
        clearTimeout(timeout);
    });

    //If error catched then send back 'Error'
    req.on('error', () => {
        callback('Error');
    });

    // Stop the request if timeout then callback 'Terrible'
    timeout = setTimeout(() => {
        console.log('running timeout');
        req.abort();
        callback('Terrible');
    }, 5000);
};

module.exports = {
    getInternetConnectionStatus
};