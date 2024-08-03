function main(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0], 10);
    const a = lines[1].split(' ').map(Number);
  
    const s = [];
    const t = [];
  
    for (let i = 0; i < n - 1; i++) {
      const [si, ti] = lines[i + 2].split(' ').map(Number);
      s.push(si);
      t.push(ti);
    }
  
    // i=1から順にs, tの処理を行っていく
    function maxCurrencyN(n, a, s, t) {
      for (let i = 0; i < n - 1; i++) {
        if (a[i] >= s[i]) {
          const moves = Math.floor(a[i] / s[i]);
          a[i] -= moves * s[i];
          a[i + 1] += moves * t[i];
        }
      }
      return a[n - 1];
    }
  
    const result = maxCurrencyN(n, a, s, t);
    console.log(result);
  }
  
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin', 'utf8');
  main(input);
