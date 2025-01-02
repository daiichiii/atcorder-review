/*-------------------------
 * 入力、出力処理
 *-------------------------*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputLines = [];
rl.on("line", (line) => {
  inputLines.push(line);
});

rl.on("close", () => {
  const [n, days] = inputLines[0].split(" ").map(Number);

  // マス目情報を取得
  const  currentCookies = inputLines[1];

  main(n, days, currentCookies);
});

/*-------------------------
 * メイン処理
 *-------------------------*/
function main(n, days, currentCookies) {

  // クッキーを食べた後に残った数
  const leftoverCookies = eatCookie(days, currentCookies);

  // 結果を出力
  console.log(leftoverCookies);
}

/**
 * 床の座標を取得する関数
 *
 * @param {Number} days - クッキーを食べる日数
 * @returns {string} currentCookies - 現在のクッキの数
 */
function eatCookie(days, currentCookies) {
  for (let i = 0; i < days; i++) {
    // 一番右の '@' を '.' に置き換える
    currentCookies = currentCookies.replace(/@(?!.*@)/, ".");
  }
  return currentCookies;
}
