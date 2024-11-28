const readline = require('readline');

// 標準入力を読み取るためのインターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputString = '';

// 標準入力から行を読み取る
rl.on('line', (line) => {
  inputString += line + '\n';
}).on('close', () => {
  // 入力が終了したら処理を開始
  processInput(inputString);
});

// 入力データを処理する関数
function processInput(inputString) {
  const result = removeEnclosedParts(inputString);
  console.log(result);
}

// ||で囲まれた部分を削除する関数
function removeEnclosedParts(str) {
  const required_values = str.split(/\|.*?\|/).join("");
  return required_values
}
