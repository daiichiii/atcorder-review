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
  const s = input[0].trim();

  // 文字の数を数える
  const charCount = {};
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // 他の文字と異なる文字を特定
  const uniqueChar = Object.keys(charCount).find(key => charCount[key] === 1);

  // 異なる文字の位置を特定して出力
  console.log(s.indexOf(uniqueChar) + 1);
}
