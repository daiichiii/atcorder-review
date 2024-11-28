const readline = require('readline');

// 標準入力を読み取るためのインターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

// 標準入力を読み取るイベントリスナー
rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  // 入力データを処理する関数を呼び出し
  processInput(inputLines);
});

function processInput(input) {
  // 各行の文字列を配列に分割し、各文字を数値に変換
  const a = input[0].trim().split(' ').map(Number);
  const b = input[1].trim().split(' ').map(Number);

  // 配列の合計を計算
  const sumA = a.reduce((acc, val) => acc + val, 0);
  const sumB = b.reduce((acc, val) => acc + val, 0);

  // 差を計算
  const score_difference = sumA - sumB;

  // 結果を出力
  console.log(score_difference + 1);
}
