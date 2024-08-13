function main(input) {
    // 入力を配列に変換
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const a = lines[1].split(' ').map(Number);

    // 配列の中で最大の数を取得
    const maxValue = Math.max(...a);

    // 最大でない数を取り出し、その中で最大のものを取得
    const secondMax = Math.max(...a.filter(x => x !== maxValue));

    // 結果を出力
    console.log(secondMax);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
