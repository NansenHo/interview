// Calculate the value of the following equation and give the integer value with the decimal part of the answer truncated.
// 1×2÷3+4×5÷6+7×8÷9+⋯+9997×9998÷9999

let sum = 0;
let i = 1;
while (i < 9999) {
  n1 = i;
  n2 = i + 1;
  n3 = i + 2;

  let t = (n1 * n2) / n3;
  sum += t;

  i = i + 3;
}
console.log(sum);

