function readSheet(lines, startIndex) {
    const [h, w] = lines[startIndex].split(' ').map(Number);
    const sheet = [];
    for (let i = 1; i <= h; i++) {
        sheet.push(parseInt(lines[startIndex + i].replace(/#/g, '1').replace(/\./g, '0'), 2));
    }
    return [h, w, sheet];
}

function main(input) {
    const lines = input.trim().split('\n');

    const [ha, wa, sheetA] = readSheet(lines, 0);
    const [hb, wb, sheetB] = readSheet(lines, ha + 1);
    const [hx, wx, tmp] = readSheet(lines, ha + hb + 2);

    // sheetX の初期化とゼロパディング
    const sheetX = new Array(10).fill(0);
    for (let i = 0; i < hx; i++) {
        sheetX.push(parseInt(tmp[i].toString(2) + '0'.repeat(20 - wx), 2));
    }
    sheetX.push(...new Array(20 - hx).fill(0));

    const START_HX = 10;
    const START_WX = 10;

    for (let ai = START_HX - ha + 1; ai <= 19; ai++) {
        for (let aj = START_WX - wa + 1; aj <= 19; aj++) {
            for (let bi = START_HX - hb + 1; bi <= 19; bi++) {
                for (let bj = START_WX - wb + 1; bj <= 19; bj++) {
                    const combined = new Array(30).fill(0);

                    for (let i = 0; i < ha; i++) {
                        combined[ai + i] |= sheetA[i] << (30 - (aj + wa));
                    }

                    for (let i = 0; i < hb; i++) {
                        combined[bi + i] |= sheetB[i] << (30 - (bj + wb));
                    }

                    if (combined.join(',') === sheetX.join(',')) {
                        console.log('Yes');
                        return;
                    }
                }
            }
        }
    }

    console.log('No');
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
