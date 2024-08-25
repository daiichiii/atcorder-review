function main(input) {
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const edges = Array.from({ length: n }, () => Array(n).fill(null));

    // 辺の情報を格納する
    for (let i = 1; i <= m; i++) {
        const [a, b, c] = lines[i].split(' ').map(Number);
        edges[a - 1][b - 1] = c;
        edges[b - 1][a - 1] = c;
    }

    // DPテーブルの初期化
    const dp = Array.from({ length: 1 << n }, () => Array(n).fill(-1));
    let maxDistance = 0;

    // 初期化: 各街を出発点に設定
    for (let i = 0; i < n; i++) {
        dp[1 << i][i] = 0;
    }

    // 全ての部分集合についてDPを計算
    for (let mask = 0; mask < (1 << n); mask++) {
        for (let u = 0; u < n; u++) {
            if (dp[mask][u] !== -1) {
                for (let v = 0; v < n; v++) {
                    if (edges[u][v] !== null && (mask & (1 << v)) === 0) {
                        const newMask = mask | (1 << v);
                        dp[newMask][v] = Math.max(dp[newMask][v], dp[mask][u] + edges[u][v]);
                        maxDistance = Math.max(maxDistance, dp[newMask][v]);
                    }
                }
            }
        }
    }

    // 結果を出力
    console.log(maxDistance);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
