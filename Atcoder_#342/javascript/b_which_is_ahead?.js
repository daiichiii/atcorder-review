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
  const p = input[1].split(' ').map(Number);
  const q = parseInt(input[2]);
  const queries = input.slice(3).map(line => line.split(' ').map(Number));

  queries.forEach(([a, b]) => {
    // それぞれの人が前から何番目かを調べる
    const aIndex = p.indexOf(a);
    const bIndex = p.indexOf(b);

    // より前に並んでいる人を出力
    if (aIndex < bIndex) {
      console.log(a);
    } else {
      console.log(b);
    }
  });
}
