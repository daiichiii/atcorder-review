function main(input) {
    // 入力を改行で分割して配列にする
    const lines = input.trim().split('\n');

    // 最初の行の m を取得
    const m = parseInt(lines[0]);

    // 次の3行の配列 si を取得
    const si = [];
    for (let i = 1; i <= 3; i++) {
        si.push(lines[i].split('').map(Number));
    }

    let ans = Infinity;

    // 全てのリールの順列を試す
    [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]].forEach(([a, b, c]) => {
        const s1 = si[a];
        const s2 = si[b];
        const s3 = si[c];

        s1.forEach((s, i) => {
            s2.forEach((t, j) => {
                s3.forEach((u, k) => {
                    // 同じ数字が揃うかチェック
                    if (s === t && t === u) {
                        let time = i < j ? j : m + j;
                        time = j < k ? time + k - j : time + m - (j - k);
                        ans = Math.min(ans, time);
                    }
                });
            });
        });
    });

    // 結果を出力
    console.log(ans === Infinity ? -1 : ans);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
