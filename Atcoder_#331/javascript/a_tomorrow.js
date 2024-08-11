function main(input) {
    // 入力を改行で分割して配列にする
    const lines = input.trim().split('\n');

    // 最初の行の M, D を取得
    const [M, D] = lines[0].split(' ').map(Number);

    // 次の行の y, m, d を取得
    const [y, m, d] = lines[1].split(' ').map(Number);

    let newY = y;
    let newM = m;
    let newD = d;

    // 日付を進める
    if (newD < D) {
        // 月内の日付がまだ残っている場合
        newD += 1;
    } else {
        // 月末の場合
        newD = 1;
        if (newM < M) {
            // 年内の月がまだ残っている場合
            newM += 1;
        } else {
            // 年末の場合
            newM = 1;
            newY += 1;
        }
    }

    // 結果を出力
    console.log(`${newY} ${newM} ${newD}`);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
