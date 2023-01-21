const fs = require("fs")
console.log(fs.readFileSync("./written.txt",  {encoding:"utf-8"} ))