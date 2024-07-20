const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (line1) => {
  rl.question('', (line2) => {
    const [n, q] = line1.split(' ').map(Number);
    const t = line2.split(' ').map(Number);

    // 穴ごとの治療回数をカウントするオブジェクトを作成
    const treatmentCounts = {};

    // 各治療回数をカウント
    t.forEach(i => {
      treatmentCounts[i] = (treatmentCounts[i] || 0) + 1;
    });

    // 奇数回の治療が行われた穴の数を数える
    let oddTreatmentCount = 0;
    for (const count of Object.values(treatmentCounts)) {
      if (count % 2 !== 0) {
        oddTreatmentCount += 1;
      }
    }

    // 最終的に残っている歯の数を計算
    const remainingTeeth = n - oddTreatmentCount;

    // 結果を出力
    console.log(remainingTeeth);

    rl.close();
  });
});
