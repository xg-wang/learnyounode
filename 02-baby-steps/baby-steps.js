const argv = process.argv;

let ret = 0;

for (let i = 2; i < argv.length; i++) {
  ret += Number(argv[i]);
}

console.log(ret);