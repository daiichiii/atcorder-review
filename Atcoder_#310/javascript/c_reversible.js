function main(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const sticks = new Set();

    for (let i = 1; i <= n; i++) {
        const s = lines[i];
        const normalizedS = [s, s.split('').reverse().join('')].sort()[0];
        sticks.add(normalizedS);
    }

    // ユニークな種類の棒の数を出力
    console.log(sticks.size);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
