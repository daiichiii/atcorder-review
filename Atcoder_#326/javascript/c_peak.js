function main(input) {
    const [n, m, ...a] = input.trim().split(/\s+/).map(Number);

    // プレゼントの座標をソート
    a.sort((x, y) => x - y);

    let maxCount = 0;
    let j = 0;

    for (let i = 0; i < n; i++) {
        for (let k = j; k < n; k++) {
            if (a[k] >= a[i] + m) {
                break;
            }
            j = k + 1;
        }

        // 現在の範囲で取得できるプレゼントの数を計算
        maxCount = Math.max(maxCount, j - i);
    }

    console.log(maxCount);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
