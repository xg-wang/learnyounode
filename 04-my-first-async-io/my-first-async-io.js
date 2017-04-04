const fs = require('fs');

const argv = process.argv;
if (argv.length < 3) {
  process.exit(1);
}
fs.readFile(argv[2], (err, data) => {
  if (err) {
    return console.log(err);
  }
  const str = data.toString();
  const lines = str.split('\n');
  console.log(lines.length - 1);
});