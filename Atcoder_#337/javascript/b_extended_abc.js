function main(input) {
    const s = input.trim();
    // 正規表現を使って、拡張ABC文字列であるかどうかを判定します
    const isExtendedABCString = /^A*B*C*$/.test(s);

    if (isExtendedABCString) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
