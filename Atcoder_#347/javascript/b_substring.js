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
  const s = input[0]; // 入力文字列
  const n = s.length;

  let substrings = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      substrings.add(s.slice(i, j));
    }
  }

  console.log(substrings.size);
}
