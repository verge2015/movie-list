# movie-list

movie-list is NodeJS code for searching and getting movie list then convert it to CSV file.

## Version of npm and NodeJS
```bash
 NodeJS v14.19.1
 npm 6.14.16
```

## Checking your version of npm and Node.js
```bash
 node -v
 npm -v
```

## Packages
```bash
 fs 
 jsonexport
 axios
```

## Installation
```bash
 npm i
OR
 npm i jsonexport
 npm i axios
```

## Usage
```bash
 node index.js
```

## Source Code Index.js
```javascript
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
```

## Source Code movie-list.js
```javascript
const fs = require("fs");
const jsonexport = require('jsonexport');

// This product uses the TMDB API but is not endorsed or certified by TMDB
//https://github.com/aybarsyildiz/movie-list-node
//https://www.themoviedb.org/settings/api
const API_KEY = "a5c9852e5a5962075884bf9a1186a033";

module.exports = async function getMovieList(movieOrSeriesName){

    const axios = require("axios");
    var options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&query='+movieOrSeriesName
      };
       await axios.request(options).then(function (response) {
        var responseDataArr = [response.data.results];
        responseDataArr = responseDataArr;
        //console.log(responseDataArr);

        jsonexport(responseDataArr, function(err, csv){
            if (err) return console.error(err);
             //Setting the target directory and filename
            fs.writeFileSync('./output/movie-list.csv', csv, 'binary');
            console.log("File written");
        });
        
        return responseDataArr;
    }).catch(function (error) {
        console.error(error);
    });

};
```
