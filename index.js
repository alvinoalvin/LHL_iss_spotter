// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);

//   fetchCoordsByIP(ip, (error, data) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }
//     console.log('It worked! Returned Latitude:', data.latitude, ' Longitude', data.longitude);

//     fetchISSFlyOverTimes({ latitude: data.latitude, longitude: data.longitude }, (error, data) => {
//       if (error) {
//         console.log("It didn't work!", error);
//         return;
//       }
//       console.log(data);
//     });
//   }
//   );
// });

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