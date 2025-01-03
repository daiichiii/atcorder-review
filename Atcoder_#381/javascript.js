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
  const s = inputLines[0]; // 入力文字列を取得
  main(s);
});

/*-------------------------
 * メイン処理
 *-------------------------*/
function main(s) {
  // 1122文字列かを判定
  const result = oneThousandOneHundredTwentyTwo(s);

  // 結果を出力
  console.log(result);
}

/**
 * 1122文字列かを判定する関数
 *
 * @param {string} s - 与えられた文字列
 * @returns {string} - 1122文字列なら 'Yes' を返す, そうでなければ 'No' を返す
 */
function oneThousandOneHundredTwentyTwo(s) {
  // 偶数長さの判定
  if (!firstCondition(s)) {
    return "No";
  }

  // 奇数番目と偶数番目のペアの一致を判定
  if (!secondCondition(s)) {
    return "No";
  }

  // 各文字が 0 個または 2 個登場しているかを判定
  if (!thirdCondition(s)) {
    return "No";
  }

  return "Yes";
}

/**
 * 偶数かどうかを判定する関数
 * 
 * @param {string} s - 与えられた文字列
 * @returns {boolean} - 偶数長さなら true を返す, そうでなければ false を返す
 */
function firstCondition(s) {
  return s.length % 2 === 0;
}

/**
 * 1から s/2 の範囲で、奇数番目と偶数番目のペアが同じかを判定する関数
 * 
 * @param {string} s - 与えられた文字列
 * @returns {boolean} - 条件の範囲で奇数番目と偶数番目のペアが同じなら true を返す, そうでなければ false を返す
 */
function secondCondition(s) {
  // 文字列の長さを取得
  const length = s.length;

  // 奇数番目と偶数番目のペアを検証
  for (let i = 0; i < length / 2; i++) {
    const firstIndex = 2 * i; // (2i−1) の 0-indexed
    const secondIndex = 2 * i + 1; // 2i の 0-indexed
    if (s[firstIndex] !== s[secondIndex]) {
      return false;
    }
  }

  return true;
}

/**
 * すべての文字が 0 個または 2 個登場しているかを判定する関数
 * 
 * @param {string} s - 与えられた文字列
 * @returns {boolean} - すべての文字が 0 個または 2 個登場しているなら true を返す, そうでなければ false を返す
 */
function thirdCondition(s) {
  const charCount = {};

  // 文字ごとの出現回数をカウント
  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // すべての文字が 0 個または 2 個登場しているか確認
  for (const count of Object.values(charCount)) {
    if (count !== 2) {
      return false;
    }
  }

  return true;
}
