/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // return fs.readfile(readFilePath)
  // if (err)
  //throw error
    //else, return user

  //.then sends a request to the GitHub API for the user's profile
    //return something
    //fs.get

  //.then, writes the JSON response of the API to `writeFilePath`
    //return something
    //fs.writeFile
    return fs.readFile(readFilePath) 
     .then(function(existingUsername) {
       if (existingUsername){
        throw new Error('User already exists!');
       } else {
         return readFilePath;
       }
     })
     .then(function(newUsername){
       return fs.get(newUsername);
     }
     .then(function(writeFile){
       return fs.writeFile(writeFilePath);
     }))
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
