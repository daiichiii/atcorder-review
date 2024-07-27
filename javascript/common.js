const readline = require('readline');

// 標準入力を読み取るためのインターフェースを作成
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];

// 標準入力から行を読み取る
rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  // 入力が終了したら処理を開始
  processInput(inputLines);
});

// 入力データを処理する関数
function processInput(input) {
  // 各行に対して処理を実行
  input.forEach((line) => {
    checkString(line);  // 必要な処理を関数として定義
  });
}

// 文字列の検証を行う関数
function checkString(s) {
  if (firstStr(s) && duringStr(s) && lastStr(s)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

// 文字列の最初の文字が"<"であるかを確認する関数
function firstStr(s) {
  return s[0] === "<";
}

// 文字列の中間部分に"<"や">"が含まれていないかを確認する関数
function duringStr(s) {
  return !s.slice(1, -1).includes("<") && !s.slice(1, -1).includes(">");
}

// 文字列の最後の文字が">"であるかを確認する関数
function lastStr(s) {
  return s[s.length - 1] === ">";
}
