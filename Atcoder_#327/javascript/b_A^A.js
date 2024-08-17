function findAForB(b) {
    // Bが0の場合は-1を返す
    if (b === 0) return -1;

    // 1からbまでの範囲でAを探索
    for (let a = 1n; a <= b; a++) {
        // A^Aを計算
        let power = a ** a;
        if (power === b) {
            return a;
        }
        if (power > b) {
            break;
        }
    }
    return -1;
}

// 標準入力の処理
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const b = BigInt(input);

const result = findAForB(b);
console.log(result.toString());  // BigIntを文字列として出力
