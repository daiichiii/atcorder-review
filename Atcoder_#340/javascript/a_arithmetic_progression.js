function main(input) {
    const lines = input.trim().split('\n');
    const [a, b, d] = lines[0].split(' ').map(Number);
  
    function rangeWithStep(a, b, d) {
      const result = [];
      for (let i = a; i <= b; i += d) {
        result.push(i);
      }
      return result;
    }
  
    const result = rangeWithStep(a, b, d);
    console.log(result.join(' '));
  }
  
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin', 'utf8');
  main(input);
