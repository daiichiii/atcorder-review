function main(input) {
    // 入力を改行で分割して配列にする
    const lines = input.trim().split('\n');
    const [N, S, M, L] = lines[0].split(' ').map(Number);

    // 最小金額を格納するための変数を非常に大きな値で初期化
    let minCost = Infinity;

    // それぞれのパックの個数で試す
    for (let x = 0; x <= Math.floor(N / 6) + 1; x++) {
        for (let y = 0; y <= Math.floor(N / 8) + 1; y++) {
            for (let z = 0; z <= Math.floor(N / 12) + 1; z++) {
                // 現在のパック数でカバーできる卵の総数
                let eggs = 6 * x + 8 * y + 12 * z;

                // 卵の個数が N 以上であればコストを計算
                if (eggs >= N) {
                    let cost = S * x + M * y + L * z;
                    // 最小コストを更新
                    minCost = Math.min(minCost, cost);
                }
            }
        }
    }

    // 最小金額を出力
    console.log(minCost);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
