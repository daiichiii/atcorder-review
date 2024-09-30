function solve() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
    const [n, m] = input[0].split(' ').map(Number);
  
    // 各集合を読み込む
    let sets = [];
    let index = 1;
    for (let i = 0; i < m; i++) {
      let c = parseInt(input[index]);
      let a = input[index + 1].split(' ').map(Number);
      sets.push(a);
      index += 2;
    }
  
    let validCount = 0;
  
    // bit全探索
    for (let bit = 1; bit < (1 << m); bit++) {
      let covered = Array(n + 1).fill(false);
  
      // bitに対応する集合を選ぶ
      for (let i = 0; i < m; i++) {
        if ((bit >> i) & 1) {
          sets[i].forEach(num => {
            covered[num] = true;
          });
        }
      }
  
      // 1からNまで全てがカバーされているか確認
      if (covered.slice(1).every(Boolean)) {
        validCount++;
      }
    }
  
    // 条件を満たす選び方の数を出力
    console.log(validCount);
  }
  
  solve();
  