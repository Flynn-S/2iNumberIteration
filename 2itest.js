// CHALLENGE
// In a language of your choice could you please provide code that iterates in multiples of 7 up until 100,
// then in multiples of 8 up to 200,
// then multiples of 9 up to 300.

numArr = [];

for (let i = 0; i <= 300; i++) {
  if (i <= 100 && i % 7 === 0) {
    numArr.push(i);
  } else if (i > 100 && i <= 200 && i % 8 === 0) {
    numArr.push(i);
  } else if (i > 200 && i <= 300 && i % 9 === 0) {
    numArr.push(i);
  }
}

console.log(numArr);
