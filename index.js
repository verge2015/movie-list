const readline = require('readline');
const movieListModule = require('./modules/movie-list.js');

//Initialize readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Input Movie Title to search
rl.question('Enter Movie Title: ', function (name) {
    rl.close();
    movieListModule(name);
});