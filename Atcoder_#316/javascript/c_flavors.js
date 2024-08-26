function main(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const mhash = {};
    const hash = {};

    for (let i = 1; i <= n; i++) {
        const [f, s] = lines[i].split(' ').map(Number);
        if (!hash[f]) {
            hash[f] = [];
        }
        hash[f].push(s);

        if (!mhash[f]) {
            mhash[f] = 0;
        }
        mhash[f] = Math.max(mhash[f], s);
    }

    // 異なる味の最大2つのスコアの合計を計算
    let max = 0;
    const mhashValues = Object.values(mhash).sort((a, b) => a - b);
    if (mhashValues.length >= 2) {
        max = mhashValues.slice(-2).reduce((a, b) => a + b, 0);
    }

    // 同じ味のカップに対する満足度の計算
    for (const f in hash) {
        if (hash[f].length > 1) {
            const [a, b] = hash[f].sort((a, b) => a - b).slice(-2);
            const sum = b + Math.floor(a / 2);
            max = Math.max(max, sum);
        }
    }

    console.log(max);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
