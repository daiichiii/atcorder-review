function main(input) {
    // 入力を配列に変換
    const s = input.trim().split("");

    // 配列を空白で結合して出力
    console.log(s.join(" "));
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
