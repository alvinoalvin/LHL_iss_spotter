// index.js
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, data) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  if (!JSON.stringify(data)) {
    return "an error has occured";
  }

  for (let obj of data) {
    const datetime = new Date(Date.now());
    datetime.setUTCSeconds(obj.risetime);
    console.log(`Next pass at ${datetime} for ${obj.duration} seconds!`)
  }
});