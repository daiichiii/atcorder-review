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
  const [n, k] = input[0].trim().split(' ').map(Number);
  const a = input[1].split(' ').map(Number);

  // 1回目の乗車は確定しているため、+1
  let count = 1;
  // 乗車人数を初期化
  let rideNumber = a[0];

  // (n-1)回ループ
  for (let i = 1; i < n; i++) {
    // 次の乗車する人を加えた時に乗車人数制限を超えた場合カウント+1
    if (rideNumber + a[i] > k) {
      count += 1;
      // 次の要素でrideNumberをリセット
      rideNumber = a[i];
    } else {
      // 次の乗車人数を加算
      rideNumber += a[i];
    }
  }

  // グループ数を出力
  console.log(count);
}
