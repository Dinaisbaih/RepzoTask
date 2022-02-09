const test = "((2+x)*(4+y))";

// const test = "x+y))";
// const test = "z*y+2";

let openBracket = 0;
let closeBracket = 0;

for (let i = 0; i < test.length; i++) {
  if (test[i] === "(") {
    openBracket += 1;
  } else if (test[i] === ")") {
    closeBracket += 1;
  }
}
if (openBracket === closeBracket) {
  console.log(true);
} else {
  console.log(false);
}
