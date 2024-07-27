const readline = require('readline');

// 標準入力を読み取るためのインターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
let n = 0;

// 標準入力から行を読み取る
rl.on('line', (line) => {
  if (n === 0) {
    n = parseInt(line.trim());
  } else {
    inputLines.push(line.trim().split(' ').map(Number));
  }
}).on('close', () => {
  // 入力が終了したら処理を開始
  processInput(n, inputLines);
});

// 入力データを処理する関数
function processInput(n, adjMatrix) {
  for (let i = 0; i < n; i++) {
    let connectedVertices = [];
    for (let j = 0; j < n; j++) {
      if (adjMatrix[i][j] === 1) {
        connectedVertices.push(j + 1);
      }
    }
    console.log(connectedVertices.join(" "));
  }
}
