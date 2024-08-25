function main(input) {
    // 入力を配列に変換
    const lines = input.trim().split('\n');
    const [n, d, p] = lines[0].split(' ').map(Number);
    const f = lines[1].split(' ').map(Number);

    // 運賃を降順でソート
    f.sort((a, b) => b - a);

    // 最小コストを計算する
    let totalCost = 0;
    let i = 0;

    while (i < n) {
        // 期間内の運賃の合計を計算
        if (i + d <= n) {
            const periodCost = f.slice(i, i + d).reduce((sum, fare) => sum + fare, 0);

            // 周遊パスを使用した方が安い場合
            if (periodCost > p) {
                totalCost += p;
            } else {
                totalCost += periodCost;
            }
            i += d;
        } else {
            // 残りの日がd枚に満たない場合
            const remainingDays = n - i;
            const remainingCost = f.slice(i, i + remainingDays).reduce((sum, fare) => sum + fare, 0);

            // 残りの日数に対してもパスを使用するか判断
            if (remainingCost > p) {
                totalCost += p;
            } else {
                totalCost += remainingCost;
            }
            break;
        }
    }

    // 結果を出力
    console.log(totalCost);
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
