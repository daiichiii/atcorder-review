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

  const a = [];
  const b = [];

  // aの配列を初期化し、入力を格納
  for (let i = 1; i <= n; i++) {
    a.push(input[i].split(''));
  }

  // bの配列を初期化し、入力を格納
  for (let i = n + 1; i <= 2 * n; i++) {
    b.push(input[i].split(''));
  }

  // 異なる部分のインデックスを出力
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] !== b[i][j]) {
        console.log(`${i + 1} ${j + 1}`);
      }
    }
  }
}
