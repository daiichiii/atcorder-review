function main(input) {
    const lines = input.trim().split('\n');
    const [n, x] = lines[0].split(' ').map(Number);
    const a = lines[1].split(' ').map(Number);

    if (x === 0) {
        console.log("Yes");
    } else {
        const seen = new Set();
        for (let num of a) {
            if (seen.has(num - x) || seen.has(num + x)) {
                console.log("Yes");
                return;
            }
            seen.add(num);
        }
        console.log("No");
    }
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
