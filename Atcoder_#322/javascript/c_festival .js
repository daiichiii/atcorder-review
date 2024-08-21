function main(input) {
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const a = lines[1].split(' ').map(Number).sort((x, y) => x - y);

    for (let i = 0; i < n; i++) {
        const target = i + 1;

        // バイナリサーチを実装する
        let left = 0;
        let right = m - 1;
        let found = false;
        let index = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (a[mid] >= target) {
                found = true;
                index = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        let diff;
        if (found) {
            diff = a[index] - target;
        } else {
            diff = n - target;
        }

        console.log(diff);
    }
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
