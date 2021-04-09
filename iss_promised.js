const request = require('request-promise-native');

const fetchMyIP = () => { return request(`https://api.ipify.org/?format=json`) };


const fetchCoordsByIP = function(body) {
  // use request to fetch IP address from JSON API 
  let ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

const fetchISSFlyOverTimes = function(coords) {
  coords = JSON.parse(coords);

  return request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
};

const nextISSTimesForMyLocation = function(body) {
  let response = JSON.parse(body).response;
  let rtnStr = "";

  for (let obj of response) {
    const datetime = new Date(Date.now());
    datetime.setUTCSeconds(obj.risetime);
    rtnStr += (`Next pass at ${datetime} for ${obj.duration} seconds!\n`)
  }

  return rtnStr;
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation};