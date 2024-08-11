function main(input) {
    // 入力を数値に変換
    const n = parseInt(input.trim(), 10);

    // 数値を文字列に変換
    const n_str = n.toString();

    // 文字列を数値で繰り返し表示
    console.log(n_str.repeat(n));
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
