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
  const s = input[0].split('');
  const t = input[1].split('');

  let trueChars = [];
  let lastChar = 0;

  s.forEach((sChar) => {
    for (let index = lastChar; index < t.length; index++) {
      if (sChar === t[index]) {
        trueChars.push(index + 1);
        lastChar = index + 1;
        break;
      }
    }
  });

  console.log(trueChars.join(' '));
}
