function main(input) {
    const lines = input.trim().split('\n');
    const q = parseInt(lines[0], 10);
  
    let result = [];
    for (let i = 1; i <= q; i++) {
      const query = lines[i].split(' ').map(Number);
      if (query[0] === 1) {
        result.push(query[1]);
      } else {
        console.log(result[result.length - query[1]]);
      }
    }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin', 'utf8');
  main(input);
  