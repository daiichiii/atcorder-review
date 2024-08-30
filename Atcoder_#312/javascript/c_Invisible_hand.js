function main() {
    // 標準入力からデータを取得
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
    
    // 売り手と買い手の人数を取得
    const [n, m] = input[0].split(' ').map(Number);
  
    // 売り手の価格リストと買い手の価格リストを取得
    const s = input[1].split(' ').map(Number);
    const b = input[2].split(' ').map(n => Number(n) + 1);
  
    // 価格ごとのカウントを保持するオブジェクトを作成
    const sCount = {};
    const bCount = {};
  
    // 売り手の価格ごとのカウントを計算
    s.forEach(price => {
      sCount[price] = (sCount[price] || 0) + 1;
    });
  
    // 買い手の価格ごとのカウントを計算（+1 した価格）
    b.forEach(price => {
      bCount[price] = (bCount[price] || 0) + 1;
    });
  
    // sCount, bCount のデフォルト値を設定
    const sDefault = 0;
    const bDefault = 0;
  
    // 全てのユニークな価格をソートして取得
    const keys = Array.from(new Set([...Object.keys(sCount).map(Number), ...Object.keys(bCount).map(Number)])).sort((a, b) => a - b);
  
    // 累積人数を初期化
    let s_num = 0;
    let b_num = m;
  
    // 価格を下から順に見ていく
    for (let k of keys) {
      s_num += (sCount[k] || sDefault);
      b_num -= (bCount[k] || bDefault);
  
      // 売り手の人数が買い手の人数以上であれば、その価格を出力
      if (s_num >= b_num) {
        console.log(k);
        return;
      }
    }
  }
  
  // main 関数を実行
  main();
  