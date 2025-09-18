let inputNumber = 6;
let i = 0;
if (inputNumber < 1) {
  console.log('false');
} else if (inputNumber === 1) {
  console.log('true');
} else if (Number.isInteger) {
  for (i = 2; i <= inputNumber; i++) {
    if (inputNumber % i === 0) {
      break;
    }
  }

  if (i === inputNumber) {
    console.log(inputNumber + ' is Prime');
  } else {
    console.log(inputNumber + ' is not Prime');
  }
}
