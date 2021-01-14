const { fetchBreedDescription } = require('./breedFetcher');

let breedName = process.argv[2];
const uriPath = "https://api.thecatapi.com/v1/breeds/search?q=";
breedName = uriPath + breedName;

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});




