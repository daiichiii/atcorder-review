function main(input) {
    // 入力を配列に分割
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const s = lines[1];

    // 'ab' または 'ba' が含まれているかチェック
    let result = (s.includes('ab') || s.includes('ba')) ? 'Yes' : 'No';

    // 結果を出力
    console.log(result);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
