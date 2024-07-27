const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputLines = [];
rl.on('line', (line) => {
  inputLines.push(line);
}).on('close', () => {
  processInput(inputLines);
});

function processInput(input) {
  const s = input[0];

  function firstStr(s) {
    return s[0] === "<";
  }

  function duringStr(s) {
    return !s.slice(1, -1).includes("<") && !s.slice(1, -1).includes(">");
  }

  function lastStr(s) {
    return s[s.length - 1] === ">";
  }

  function checkString(s) {
    if (firstStr(s) && duringStr(s) && lastStr(s)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }

  checkString(s);  // 文字列の検証を実行
}
