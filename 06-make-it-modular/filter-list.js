const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }
    callback(null, files.filter(f => {
      return path.extname(f) === `.${ext}`;
    }));
  });
}
