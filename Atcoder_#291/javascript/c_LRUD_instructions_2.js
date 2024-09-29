function main(input) {
    // 入力を分割して、最初の値をN、2番目の値をSとして取得
    const [n, s] = input.trim().split('\n');
    
    // 座標を管理する
    let x = 0, y = 0;
    // 訪れた座標を管理するセット
    const visited = new Set();
    visited.add(`${x},${y}`);

    // 移動を処理
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // 各方向に応じて座標を更新
        if (char === 'R') {
            x += 1;
        } else if (char === 'L') {
            x -= 1;
        } else if (char === 'U') {
            y += 1;
        } else if (char === 'D') {
            y -= 1;
        }

        // 現在の座標がすでに訪れていたら "Yes" を出力して終了
        const currentPos = `${x},${y}`;
        if (visited.has(currentPos)) {
            console.log("Yes");
            return;
        }

        // 新たに訪れた座標を記録
        visited.add(currentPos);
    }

    // 同じ座標に戻っていない場合は "No" を出力
    console.log("No");
}

// 標準入力を受け取る部分（Node.jsの場合）
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
