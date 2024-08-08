function main(input) {
    const s = input.trim();
  
    if (s[0] === s[0].toUpperCase() && s.slice(1) === s.slice(1).toLowerCase()) {
      console.log('Yes');
    } else {
      console.log('No');
    }
  }
  
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin', 'utf8');
  main(input);
  