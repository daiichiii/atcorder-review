function main(input) {
    const lines = input.trim().split('\n');
    const s = lines[0];

    // 最後のドット以降の部分を抽出
    const lastPart = s.split('.').pop();

    console.log(lastPart);
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
