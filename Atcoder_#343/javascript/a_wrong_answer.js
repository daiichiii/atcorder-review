const readline = require('readline');

// 標準入力を読み取るためのインターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

// 標準入力から行を読み取る
rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  // 入力が終了したら処理を開始
  processInput(inputLines);
});

// 入力データを処理する関数
function processInput(input) {
  // 入力行をスペースで区切り、数値に変換
  const numbers = input
    .flatMap(line => line.split(' ')) // 各行をスペースで分割
    .map(num => parseFloat(num.trim())) // 数値に変換

  const sum_ab = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(9 - sum_ab);
}
