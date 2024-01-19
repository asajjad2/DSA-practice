function reverseCharacters(message, li, ri){

    let leftindex = li, rightindex = ri;
    let temp;
    while(leftindex < rightindex){
        
        temp = message[leftindex];
        message[leftindex] = message[rightindex];
        message[rightindex] = temp;
        
        leftindex++;
        rightindex--;
    }

    return message;

}

function reverseWords(message) {

// Decode the message by reversing the words
message = reverseCharacters(message, 0, message.length - 1);

    let start = 0, end, i = 0;

    while(i <= message.length){
        
        if(message[i] == ' ' || i == message.length){
            end = i-1;
            reverseCharacters(message, start, end);
            start = i+1;
        }
        
        i++;
    }

    return message;

}

// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
if (a === b) {
    console.log(`${desc} ... PASS`);
} else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
}
}