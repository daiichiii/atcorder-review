function Main(input) {
    const lines = input.split("\n").map(line => line.trim());
    const grid = [];
    for (let i = 0; i < 3; i++) {
      grid.push(lines[i].split(" ").map(Number));
    }
  
    const C = grid.flat();
    const visited = new Array(9).fill(false);
    
    // 上下左右斜めのパターンをチェックする関数
    const check = (pos) => {
      const x = pos % 3;
      const y = Math.floor(pos / 3);
  
      // 行チェック
      let row = [];
      for (let i = 0; i < 3; i++) {
        let node = y * 3 + i;
        if (node !== pos) row.push(node);
      }
      if (row.every(v => visited[v]) && C[row[0]] === C[row[1]] && C[row[0]] !== C[pos]) return true;
  
      // 列チェック
      let col = [];
      for (let i = 0; i < 3; i++) {
        let node = i * 3 + x;
        if (node !== pos) col.push(node);
      }
      if (col.every(v => visited[v]) && C[col[0]] === C[col[1]] && C[col[0]] !== C[pos]) return true;
  
      // 斜めチェック
      if (x === y) {
        let diag1 = [];
        for (let i = 0; i < 3; i++) {
          let node = i * 3 + i;
          if (node !== pos) diag1.push(node);
        }
        if (diag1.every(v => visited[v]) && C[diag1[0]] === C[diag1[1]] && C[diag1[0]] !== C[pos]) return true;
      }
  
      if (x + y === 2) {
        let diag2 = [];
        for (let i = 0; i < 3; i++) {
          let node = i * 3 + (2 - i);
          if (node !== pos) diag2.push(node);
        }
        if (diag2.every(v => visited[v]) && C[diag2[0]] === C[diag2[1]] && C[diag2[0]] !== C[pos]) return true;
      }
  
      return false;
    };
  
    let totalPermutations = factorial(9);
    let disappointingCount = 0;
  
    const perms = generatePermutations([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  
    perms.forEach(perm => {
      for (let i = 0; i < 9; i++) {
        const pos = perm[i];
        visited[pos] = true;
        if (check(pos)) {
          disappointingCount++;
          break;
        }
      }
      visited.fill(false);
    });
  
    const result = (totalPermutations - disappointingCount) / totalPermutations;
    console.log(result.toFixed(10));
  }
  
  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function generatePermutations(arr) {
    if (arr.length <= 1) return [arr];
    const result = [];
  
    arr.sort((a, b) => a - b);
    do {
      result.push([...arr]);
    } while (nextPermutation(arr));
  
    return result;
  }
  
  function nextPermutation(arr) {
    const n = arr.length;
    let i = n - 2;
  
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;
  
    if (i < 0) return false;
  
    let j = n - 1;
    while (arr[j] <= arr[i]) j--;
  
    [arr[i], arr[j]] = [arr[j], arr[i]];
  
    let left = i + 1;
    let right = n - 1;
  
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  
    return true;
  }
  
  // 標準入力を読み込み、main関数を呼び出し
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin', 'utf8');
  Main(input);
  