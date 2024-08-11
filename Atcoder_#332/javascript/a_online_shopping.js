const fs = require('fs');

function main(input) {
    // 入力を改行で分割して配列にする
    const lines = input.trim().split('\n');

    // 最初の行の n, s, k を取得
    const [n, s, k] = lines[0].split(' ').map(Number);

    let sumPrice = 0;

    // n行の価格と数量を取得し、合計価格を計算
    for (let i = 1; i <= n; i++) {
        const [p, q] = lines[i].split(' ').map(Number);
        sumPrice += p * q;
    }

    // 合計価格が s 未満の場合、k を足した価格を出力
    if (sumPrice < s) {
        console.log(sumPrice + k);
    } else {
        console.log(sumPrice);
    }
}

// 標準入力を読み込み、main関数を呼び出し
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
