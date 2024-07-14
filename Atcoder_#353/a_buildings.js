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
  const n = parseInt(input[0].trim(), 10);
  const h = input[1].split(' ').map(Number);

  // 1番目よりも高いビルを初期化
  let heightThenOne = -1;

  // 1番目よりも高いビルが出た時点で、heightThenOneに格納しループを終了
  for (let i = 1; i < n; i++) {
    if (h[0] < h[i]) {
      heightThenOne = i;
      break;
    }
  }

  // 1番目よりも高いビルがなければ、-1を出力
  if (heightThenOne === -1) {
    console.log(-1);
  } else {
    // 1番目よりも高いビルがあれば、その順番を出力
    console.log(heightThenOne + 1);
  }
}
