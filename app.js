const apiKey = process.env.WEATHER_API_KEY;

if (!apiKey) {
  console.error("CRITICAL ERROR: No API Key found!");
  process.exit(1); // This tells GitHub the test FAILED
}

console.log("App is running securely with the API Key.");
process.exit(0); // This tells GitHub the test PASSED
