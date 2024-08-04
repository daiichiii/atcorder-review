function main(input) {
    const lines = input.trim().split('\n');
    const [H, W, N] = lines[0].split(' ').map(Number);
  
    // グリッドの初期化
    let grid = Array.from({ length: H }, () => Array(W).fill('.'));
  
    // 高橋君の初期位置と向き（上=0, 右=1, 下=2, 左=3）
    let x = 0, y = 0, direction = 0;
  
    // 方向の変化を表す配列（上、右、下、左）
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
  
    for (let i = 0; i < N; i++) {
      if (grid[x][y] === '.') {
        // 現在のマスが白の場合
        grid[x][y] = '#';
        direction = (direction + 1) % 4;  // 時計回りに90度回転
      } else {
        // 現在のマスが黒の場合
        grid[x][y] = '.';
        direction = (direction + 3) % 4;  // 反時計回りに90度回転
      }
      
      // 次のマスに移動
      x = (x + dx[direction] + H) % H;
      y = (y + dy[direction] + W) % W;
    }
  
    // グリッドの出力
    for (let row of grid) {
      console.log(row.join(''));
    }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin', 'utf8');
  main(input);
  