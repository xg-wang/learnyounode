const fs = require('fs');

const argv = process.argv;
if (argv.length < 3) {
  process.exit(1);
}
const buf = fs.readFileSync(argv[2]);
const str = buf.toString();
const lines = str.split('\n');
console.log(lines.length - 1);