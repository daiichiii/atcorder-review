function countTrees(a, m, l, r) {
    let z;

    if (l <= a && r >= a) {
        // 'a' が範囲内にある場合、'a' を中心に左右にツリーが立つ本数を計算
        z = (a - l) / m + (r - a) / m + 1n;
    } else {
        // 'a' が範囲外の場合、範囲全体のツリー本数を計
        z = (r - l + 1n) / m;

        if ((r - l + 1n) % m && (a < l ? (r - a) : (a - l)) % m < (r - l + 1n) % m) {
            z++;
        }
    }

    return z;
}

// 標準入力を読み込み、main関数に渡す
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(BigInt);
const [a, m, l, r] = input;

// 結果を計算して出力
console.log(countTrees(a, m, l, r).toString());
