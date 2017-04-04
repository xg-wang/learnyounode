const fs = require('fs');

const argv = process.argv;

fs.readdir(argv[2], (err, files) => {
  if (err) {
    return console.error(err);
  }
  const ext = argv[3];
  files.filter(f => {
    const arr = f.split('.');
    return arr.length > 1 && ext === arr[arr.length - 1];
  }).forEach(f => console.log(f));
});
