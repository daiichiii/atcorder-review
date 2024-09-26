function main(input) {
    const n = parseInt(input.trim());
    let count = 0;

    // A * B の組み合わせを先に計算
    const abCombinations = new Map();

    for (let a = 1; a <= n; a++) {
        for (let b = 1; b <= n; b++) {
            const ab = a * b;
            if (ab > n) break;
            if (!abCombinations.has(ab)) {
                abCombinations.set(ab, 0);
            }
            abCombinations.set(ab, abCombinations.get(ab) + 1);
        }
    }

    // 残りの C * D のペアを探す
    for (let c = 1; c <= n; c++) {
        for (let d = 1; d <= n; d++) {
            const cd = c * d;
            if (cd > n) break;
            const target = n - cd;
            if (abCombinations.has(target)) {
                count += abCombinations.get(target);
            }
        }
    }

    console.log(count);
}

// 標準入力を読み込んで main 関数を呼び出す
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
main(input);
