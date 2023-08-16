// easy
// There is a number in which all the digits are the same, like 7777, and it is a multiple of 13563 (with the multiple being within 10000).
// Determine this number.

let res = 0;
let num = 13563;
for (let i = 0; i < 10000; i++) {
  res = num * i;
  let resArr = res.toString().split("");
  let firstElement = resArr[0];
  let isAllSame = resArr.every((e) => {
    return firstElement === e;
  });
  if (isAllSame) {
    console.log(res, ", ", i);
  }
}