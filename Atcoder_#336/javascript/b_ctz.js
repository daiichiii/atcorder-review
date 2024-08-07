function ctz(n) {
    // nを2進数の文字列に変換
    const binaryStr = n.toString(2);
    // 末尾の連続する0の数を数える
    const trailingZeros = binaryStr.match(/0*$/)[0].length;
    return trailingZeros;
}

// 標準入力から値を読み取る
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const n = parseInt(input, 10);

// 結果を出力
console.log(ctz(n));
