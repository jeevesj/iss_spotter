const { fetchMyIP } = require('./iss'); // Replace 'your_module' with the actual module filename

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("It worked!, Returned IP:", ip);
});

