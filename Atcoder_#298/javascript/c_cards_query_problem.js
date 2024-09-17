function main(input) {
    const lines = input.trim().split('\n');  // 入力データを改行で分割
    const n = parseInt(lines[0], 10);  // 最初の行から箱の数を取得
    const q = parseInt(lines[1], 10);  // 2行目からクエリの数を取得

    const boxes = Array.from({ length: n + 1 }, () => []);  // 各箱に対応する空の配列を作成
    const cardToBoxes = new Map();  // カードがどの箱にあるかを追跡するマップ
    const results = [];  // 結果を格納する配列

    for (let i = 2; i < lines.length; i++) {
        const query = lines[i].split(' ').map(Number);  // 各クエリを処理

        if (query[0] === 1) {
            const [_, card, box] = query;
            boxes[box].push(card);  // カードを指定の箱に追加

            if (!cardToBoxes.has(card)) {
                cardToBoxes.set(card, new Set());
            }
            cardToBoxes.get(card).add(box);  // カードがどの箱に入っているか追跡

        } else if (query[0] === 2) {
            const [_, box] = query;
            const sortedBox = boxes[box].slice().sort((a, b) => a - b);  // 箱の中身を昇順にソート
            results.push(sortedBox.join(' '));  // 結果を記録

        } else if (query[0] === 3) {
            const [_, card] = query;
            if (cardToBoxes.has(card)) {
                const boxList = Array.from(cardToBoxes.get(card)).sort((a, b) => a - b);  // カードが入っている箱のリストをソート
                results.push(boxList.join(' '));  // 結果を記録
            }
        }
    }

    console.log(results.join('\n'));  // 全ての結果を出力
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
