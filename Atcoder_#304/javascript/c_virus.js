function main(input) {
    const lines = input.trim().split('\n');
    const [n, d] = lines[0].split(' ').map(Number);
    
    // 人々の座標を取得
    const people = [];
    for (let i = 1; i <= n; i++) {
        const [x, y] = lines[i].split(' ').map(Number);
        people.push([x, y]);
    }

    // 距離の二乗を計算する関数
    function distanceSquared(p1, p2) {
        return (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
    }

    // 感染しているかどうかを管理する配列
    const infected = Array(n).fill(false);
    infected[0] = true; // 人1は最初から感染している

    // BFSのためのキュー
    const queue = [0];

    // 距離Dの二乗を事前に計算
    const dSquared = d ** 2;

    // BFSで感染を広げる
    while (queue.length > 0) {
        const current = queue.shift();
        
        for (let i = 0; i < n; i++) {
            if (!infected[i] && distanceSquared(people[current], people[i]) <= dSquared) {
                infected[i] = true;
                queue.push(i);
            }
        }
    }

    // 結果の出力
    infected.forEach(isInfected => {
        console.log(isInfected ? 'Yes' : 'No');
    });
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
