/* Create a CLI application that converts units (°C↔°F, km↔mi, kg↔lb). Run via npm start with
 arguments (e.g., `npm start -- c2f 25`). Must support --help command and handle invalid inputs.
 */

const inputArg = process.argv[2];
const inputValue = process.argv[3];
const c2f = (inputValue * 9) / 5 + 32;
const f2c = (inputValue - 32) * (5 / 9);
const k2m = inputValue * 0.621371;
const m2k = inputValue * 1.60934;

if (inputArg === 'c2f') {
  console.log(c2f);
} else if (inputArg === 'f2c') {
  console.log(f2c);
} else if (inputArg === 'k2m') {
  console.log(k2m);
} else if (inputArg === 'm2k') {
  console.log(m2k);
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
