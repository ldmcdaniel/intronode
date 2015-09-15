var fs = require('fs');
var csv = require('csv');

module.exports = function (filename) {
  fs.createReadStream(filename)
    .pipe(csv.parse())
    .pipe(process.stdout);
}


