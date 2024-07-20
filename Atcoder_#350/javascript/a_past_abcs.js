const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (s) => {
  // sの末尾3文字を取得
  const numberStr = s.slice(3, 6);

  // 結合した文字列を整数に変換
  const number = parseInt(numberStr, 10);

  // 範囲チェック
  if (number >= 1 && number <= 349 && number !== 316) {
    console.log("Yes");
  } else {
    console.log("No");
  }

  rl.close();
});
