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
  const n = parseInt(input[0]);

  // 入力の2行目を整数の配列に変換
  const a = input[1].split(' ').map(Number);

  // 配列aの合計を計算
  const a_sum = a.reduce((sum, num) => sum + num, 0);

  // a_sumが正の場合は負の絶対値、負の場合は正の絶対値を出力
  if (a_sum > 0) {
    console.log(-Math.abs(a_sum));
  } else {
    console.log(Math.abs(a_sum));
  }
}
