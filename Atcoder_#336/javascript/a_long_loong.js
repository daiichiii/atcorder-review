function main(input) {
    // 入力をトリムしてから整数に変換
    const n = parseInt(input.trim(), 10);
    
    // 'o' を n 回繰り返す
    const oString = 'o'.repeat(n);
    
    // 結果を出力
    console.log('L' + oString + 'n' + 'g');
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
