const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss'); // Replace 'your_module' with the actual module filename

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked!, Returned IP:", ip);

//   fetchCoordsByIP(ip, (latitude, longitude) => {

//     console.log(`latitude: ${latitude}, longitude: ${longitude}`);
  


//     fetchISSFlyOverTimes(latitude, longitude, (error, flyoverTimes) => {
//       if (error) {
//         console.log("Error:", error);
//       } else {
//         console.log("ISS Flyover Times:", flyoverTimes);
//       }

//       const printPassTimes = function(passTimes) {
//         for (const pass of passTimes) {
//           const datetime = new Date(0);
//           datetime.setUTCSeconds(pass.risetime);
//           const duration = pass.duration;
//           console.log(`Next pass at ${datetime} for ${duration} seconds!`);
//         }
//       };
      
//       nextISSTimesForMyLocation((error, passTimes) => {
//         if (error) {
//           return console.log("It didn't work!", error);
//         }
//         // success, print out the deets!
//         printPassTimes(passTimes);
//       });

//     });

//   });

// });


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});



fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
  fetchISSFlyOverTimes(coordinates, (error, passTimes) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
  
    console.log('It worked! Returned flyover times:' , passTimes);
  });
});



const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});