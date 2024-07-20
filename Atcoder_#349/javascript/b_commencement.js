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
  const s = input[0];
  console.log(goodString(s) ? "Yes" : "No");
}

function goodString(s) {
  // 文字の出現回数を数える
  const charCount = {};
  for (const char of s) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // 出現回数ごとにその出現回数を持つ文字の種類数をカウントする
  const countFreq = {};
  for (const count of Object.values(charCount)) {
    if (countFreq[count]) {
      countFreq[count]++;
    } else {
      countFreq[count] = 1;
    }
  }

  // 出現回数ごとに条件をチェック
  for (const freq of Object.values(countFreq)) {
    if (freq !== 0 && freq !== 2) {
      return false;
    }
  }

  return true;
}
