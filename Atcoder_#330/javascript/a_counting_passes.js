function main(input) {
    // 入力を改行で分割して配列にする
    const lines = input.trim().split('\n');

    // 最初の行の n, l を取得
    const [n, l] = lines[0].split(' ').map(Number);

    // 次の行の配列 a を取得
    const a = lines[1].split(' ').map(Number);

    // l 以上の数のカウントを行う
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] >= l) {
            count += 1;
        }
    }

    // 結果を出力
    console.log(count);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
