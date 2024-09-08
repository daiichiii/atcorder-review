function main(input) {
    const lines = input.trim().split('\n');
    
    // 最初の行から N, M, H, K を取得
    const [n, m, h, k] = lines[0].split(' ').map(Number);
    
    // 移動方向 S を取得
    const s = lines[1].split('');
    
    // アイテムの座標をセットに格納
    const items = new Set();
    for (let i = 2; i < 2 + m; i++) {
        const [x, y] = lines[i].split(' ').map(Number);
        items.add(`${x},${y}`);
    }

    // Takahashiの初期位置
    let x = 0, y = 0;
    let health = h;

    // 移動を順に処理する
    for (let i = 0; i < n; i++) {
        // 体力を1消費
        health--;

        // 体力が0未満になったら倒れる
        if (health < 0) {
            console.log("No");
            return;
        }

        // 移動方向に応じて座標を変更
        switch (s[i]) {
            case 'R':
                x += 1;
                break;
            case 'L':
                x -= 1;
                break;
            case 'U':
                y += 1;
                break;
            case 'D':
                y -= 1;
                break;
        }

        // 現在の位置にアイテムがあり、体力がK未満なら回復
        const currentPosition = `${x},${y}`;
        if (items.has(currentPosition) && health < k) {
            health = k;  // 体力を回復
            items.delete(currentPosition);  // アイテムを消費
        }
    }

    // 全ての移動が成功した場合
    console.log("Yes");
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
