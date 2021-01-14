
const request = require('request');
const BREED_NOT_FOUND = "the mentioned breed not found in our database";
const uriPath = "https://api.thecatapi.com/v1/breeds/search?q=";

const args = process.argv;
let breedInput = args[2];
breedInput = uriPath + breedInput;
console.log(breedInput);

request(breedInput, (error, response, body) => {
  if (error === null) {
    console.log(`This is the Error code form API: ${error}`);
  }

  //converting a string to an object
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log(data[0]);
  } else {
    console.log(BREED_NOT_FOUND);
  }

});
