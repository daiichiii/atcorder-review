const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('', (r) => {
  const R = parseInt(r, 10);
  let next_level;

  if (R <= 99) {
    next_level = 100;
  } else if (R <= 199) {
    next_level = 200;
  } else {
    next_level = 300;
  }

  const required_increase = next_level - R;
  console.log(required_increase);

  rl.close();
});
 