const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss_promised');

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(nextISSTimesForMyLocation)
  .then(body => console.log(body))
  .catch(err => console.log(`we've recieved an error: ${err}`)
  )