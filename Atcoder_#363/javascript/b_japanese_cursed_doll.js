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
  const [n, t, p] = input[0].split(" ").map(Number);
  const l = input[1].split(" ").map(Number);

  // 現在の髪の長さがT以上の人の数を数える
  const initialCount = l.filter(length => length >= t).length;

  // すでに条件を満たしている場合は0を出力
  if (initialCount >= p) {
    console.log(0);
  } else {
    // 条件を満たすために必要な日数を計算
    let days = 0;
    while (true) {
      days += 1;
      const newCount = l.filter(length => length + days >= t).length;
      if (newCount >= p) {
        console.log(days);
        break;
      }
    }
  }
}
