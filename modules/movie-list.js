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