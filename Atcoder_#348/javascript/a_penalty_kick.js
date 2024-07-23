const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (n) => {
  const number = parseInt(n.trim(), 10); 
  let pk_result = [];

  for (let i = 0; i < number; i++) {
    if ((i + 1) % 3 === 0) {
      pk_result.push("x");
    } else {
      pk_result.push("o");
    }
  }

  console.log(pk_result.join("")); 
  rl.close();
});
