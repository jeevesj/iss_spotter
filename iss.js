
const request = require('request');

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    if (response.statusCode !== 200) {
      const message = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(message), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};
 
const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
  
  
    if (response.statusCode !== 200) {
      const message = `status Code ${response.statusCode} when fectching Coords. Response ${body}`;
      callback(Error(message), null);
      return;
    }
    const data = JSON.parse(body);
    //console.log(data);
    const latitude = data.latitude;
    const longitude = data.longitude;

  
    callback(latitude, longitude);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };

