function main(input) {
    // 入力を改行で分割して配列にする
    const lines = input.trim().split('\n');

    // 最初の行の n, l, r を取得
    const [n, l, r] = lines[0].split(' ').map(Number);

    // 次の行の配列 a を取得
    const a = lines[1].split(' ').map(Number);

    // 結果を格納する配列
    const result = [];

    // 各要素に対して X[i] を計算
    a.forEach(ai => {
        if (ai < l) {
            result.push(l);
        } else if (ai > r) {
            result.push(r);
        } else {
            result.push(ai);
        }
    });

    // 結果を出力
    console.log(result.join(' '));
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
