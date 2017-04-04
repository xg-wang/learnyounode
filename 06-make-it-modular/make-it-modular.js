const filerer = require('./filter-list');

const argv = process.argv;

filerer(argv[2], argv[3], (err, data) => {
  if (err) {
    console.error(err);
  }
  data.forEach(file => console.log(file));
})
