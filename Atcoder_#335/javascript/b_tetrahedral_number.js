function main(input) {
    const N = parseInt(input.trim(), 10);

    // 非負整数の組 (x, y, z) を求める
    for (let x = 0; x <= N; x++) {
        for (let y = 0; y <= N; y++) {
            for (let z = 0; z <= N; z++) {
                if (x + y + z <= N) {
                    console.log(`${x} ${y} ${z}`);
                }
            }
        }
    }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
