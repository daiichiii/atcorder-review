function calculateDistance(point1, point2) {
    const vertices = ['A', 'B', 'C', 'D', 'E'];
    const index1 = vertices.indexOf(point1);
    const index2 = vertices.indexOf(point2);
    const distance = Math.abs(index1 - index2);
    return Math.min(distance, 5 - distance); // 距離を正五角形の対称性に基づいて計算
}

function main(input) {
    // 入力の1行目と2行目をそれぞれ取得
    const [s1s2, t1t2] = input.trim().split('\n');

    // 各ペアの点を取り出して距離を計算
    const distance1 = calculateDistance(s1s2[0], s1s2[1]);
    const distance2 = calculateDistance(t1t2[0], t1t2[1]);

    // 結果を判定
    if (distance1 === distance2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
