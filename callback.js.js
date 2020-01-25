//Synchronous Code
var fs = require("fs")
console.log("Program Started");
var data =fs.readFileSync("input.txt");
console.log(data.toString());
console.log("Program Ended");

//Asynchronous Code using callback
var fs = require("fs")
console.log("Program Started");
fs.readFile("input.txt",function(err,data){
    if(err) return console.error(err);

    console.log(data.toString());
});
console.log("Program Ended");

