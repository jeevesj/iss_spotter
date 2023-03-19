const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss'); // Replace 'your_module' with the actual module filename

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked!, Returned IP:", ip);

  fetchCoordsByIP(ip, (latitude, longitude) => {

    console.log(`latitude: ${latitude}, longitude: ${longitude}`);
  


    fetchISSFlyOverTimes(latitude, longitude, (error, flyoverTimes) => {
      if (error) {
        console.log("Error:", error);
      } else {
        console.log("ISS Flyover Times:", flyoverTimes);
      }
    });

  });

});
