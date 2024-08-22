function findKth321LikeNumber(k) {
    let queue = [...Array(9).keys()].map(i => i + 1); // 1桁の321-like Numberを初期値として追加
    let count = 0;

    while (true) {
        const current = queue.shift(); // キューの先頭の要素を取り出す
        count += 1;


        if (count === k) {
            console.log(current);
            return current;
        }

        // 次の狭義単調減少の数を生成
        for (let digit = 0; digit <= 9; digit++) {
            if (current % 10 > digit) {
                queue.push(current * 10 + digit);
            }
        }
    }
}

// 標準入力を読み込み、K番目の321-like Numberを出力
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();
const k = parseInt(input, 10);

findKth321LikeNumber(k);
