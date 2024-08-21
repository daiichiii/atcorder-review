function main(input) {
    const lines = input.trim().split('\n');
    const [n, m] = lines[0].split(' ').map(Number);
    const a = lines[1].split(' ').map(Number);
    const solved = lines.slice(2, 2 + n);

    // ボーナス点の設定
    const bonusPoints = Array.from({ length: n }, (_, i) => i + 1);

    // 各プレイヤーの現在の得点を計算
    const currentScores = [];
    const remainingProblems = [];

    for (let i = 0; i < n; i++) {
        let score = bonusPoints[i];
        const remaining = [];
        for (let j = 0; j < m; j++) {
            if (solved[i][j] === 'o') {
                score += a[j];
            } else {
                remaining.push(a[j]);
            }
        }
        currentScores.push(score);
        remainingProblems.push(remaining.sort((x, y) => y - x));
    }

    // 全プレイヤー中の最大スコアを計算（1回だけ計算）
    const maxScore = Math.max(...currentScores);

    // 各プレイヤーに対する回答を求める
    const results = [];

    for (let i = 0; i < n; i++) {
        // 自分が最大スコアの場合は0を出力
        if (currentScores[i] === maxScore) {
            results.push(0);
            continue;
        }

        // プレイヤー i が他の全プレイヤーを上回るために必要なスコアを計算
        const neededScore = maxScore + 1 - currentScores[i];

        let solvedCount = 0;
        let currentSum = 0;

        for (const score of remainingProblems[i]) {
            currentSum += score;
            solvedCount += 1;

            if (currentSum >= neededScore) {
                break;
            }
        }

        results.push(solvedCount);
    }

    // 結果を出力
    console.log(results.join('\n'));
}

// 標準入力を読み込み、main関数を呼び出し
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8');
main(input);
