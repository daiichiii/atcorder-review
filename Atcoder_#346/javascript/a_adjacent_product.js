const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  processInput(inputLines);
});

function processInput(input) {
  const n = parseInt(input[0]);
  const a = parseInt(input[1].split(' ')).map(number)
  
  let b = []

  for (let i = 1; i <= n; i++) {
    b << a[i] * a[i+1]
  }
    console.log(b);
}
