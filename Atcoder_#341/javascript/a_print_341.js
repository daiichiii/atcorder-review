function main(input) {
    const inp = input;
    const n = inp;
    
    function repeat_101(n) {
      let result = '10'.repeat(n) + '1';
      console.log(result);
    }
    
    repeat_101(n)
  }
  
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin', 'utf8');
  main(input);
