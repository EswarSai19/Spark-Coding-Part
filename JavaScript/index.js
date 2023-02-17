// const fs = require("fs")
// console.log(fs.readFileSync("./written.txt",  {encoding:"utf-8"} ))

// function generateRandomNumber() {
//     return Math.floor(Math.random() * 1000).toString().slice(0, 3);
//     }

//     console.log(generateRandomNumber());


    var unixts = 1676618685488;
var date = new Date(unixts);

var fdate = date.getFullYear() + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + ("0" + date.getDate()).slice(-2);
console.log(fdate);


let myDate = new Date()
console.log(Date.now()/(1000*60*60*24))