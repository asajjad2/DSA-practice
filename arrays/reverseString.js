function reverse(arrayOfChars) {

  let temp;
  let length = arrayOfChars.length;
  for(let i=0; i<length/2; i++){
    temp = arrayOfChars[i];
    arrayOfChars[i] = arrayOfChars[length-i+1];
    arrayOfChars[length-i+1] = temp;
    
  }
  
  console.log("reversed: ",arrayOfChars);
  return arrayOfChars;
}

// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}