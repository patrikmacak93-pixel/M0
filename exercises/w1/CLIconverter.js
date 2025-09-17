/*const inputArg = process.argv[2];
const inputValue = parseInt(process.argv[3]);
const c2f = (inputValue * 9) / 5 + 32;
const f2c = (inputValue - 32) * (5 / 9);
const k2m = inputValue * 0.621371;
const m2k = inputValue * 1.60934;
const kg2lb = inputValue * 2.20462262;
const lb2kg = inputValue * 0.45359237;

console.log(inputArg);

if (Number.isInteger(inputValue)) {
if (inputArg === 'c2f') {
  console.log(c2f);
} else if (inputArg === 'f2c') {
  console.log(f2c);
} else if (inputArg === 'k2m') {
  console.log(k2m);
} else if (inputArg === 'm2k') {
  console.log(m2k);
} else if (inputArg === 'kg2lb') {
  console.log(kg2lb);
} else if (inputArg === 'lb2kg') {
  console.log(lb2kg);
} else if (inputArg === '--help') {
  console.log(
    'For convertion from Celsius to Farenheit use argument: --c2f followed by value\n' +
      'For convertion from Farenheit to Celsius use argument: --f2c followed by value\n' +
      'For convertion from Kilometers to Miles use argument: --k2m followed by value\n' +
      'For convertion from Miles to Kilometers use argument: --m2k followed by value'
  );
} else {
  console.log('Enter valid argument');
}
} else {
console.log('Converted value must be a integer');
}
*/

const inputArg = process.argv[2];
const inputValue = process.argv[3];
const converters = {
  c2f: (x) => (x * 9) / 5 + 32,
  f2c: (x) => (x - 32) * (5 / 9),
  k2m: (x) => x * 0.621371,
  m2k: (x) => x * 1.60934,
  kg2lb: (x) => x * 2.20462262,
  lb2kg: (x) => x * 0.45359237,
};

if (isNaN(inputValue)) {
  console.log('Value is not a number');
  process.exit[1];
} else if (converters[inputArg]) {
  console.log(converters[inputArg](inputValue));
} else {
  console.log('Invalid argument');
}
