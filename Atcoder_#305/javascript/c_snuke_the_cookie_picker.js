function main(input) {
    // 入力を改行で分割し、各行を配列として扱う
    const lines = input.trim().split('\n');
    
    // グリッドの高さHと幅Wを取得
    const [h, w] = lines[0].split(' ').map(Number);
    
    // グリッドを取得（2行目以降）
    const grid = lines.slice(1).map(line => line.split(''));

    // クッキーの矩形領域を特定するための変数
    let top = null, bottom = null, left = null, right = null;

    // 矩形領域の左上と右下を探す
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (grid[i][j] === '#') {
                if (top === null) top = i; // 初めてクッキーを見つけたらtopを設定
                bottom = i; // 毎回クッキーを見つけたらbottomを更新
                if (left === null || j < left) left = j; // 一番左のクッキー
                if (right === null || j > right) right = j; // 一番右のクッキー
            }
        }
    }

    // 矩形領域内でクッキーがなくなっている位置を探す
    for (let i = top; i <= bottom; i++) {
        for (let j = left; j <= right; j++) {
            if (grid[i][j] === '.') {
                console.log(`${i + 1} ${j + 1}`);
                return;
            }
        }
    }
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
