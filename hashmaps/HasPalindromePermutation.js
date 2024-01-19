function hasPalindromePermutation(theString) {

    // Check if any permutation of the input is a palindrome
    //naive solution, permutate and check if palindrome on each permutation

    //How can we tell if any permutation of a string is a palindrome?
    //if for each character there is a same character on different index
    //if odd characters, one could be allowed to be different

    let sameCharacters = new Set();

    for(let i=0; i<theString.length; i++){
        
        if(sameCharacters.has(theString[i]))
        sameCharacters.delete(theString[i])
        else
        sameCharacters.add(theString[i])
    }

    if(sameCharacters.size === 0 && theString.length % 2 === 0)
        return true;
    else if(sameCharacters.size === 1 && theString.length % 2 === 1)
        return true;
    else
        return false;
        
    //return sameCharacters.size <= 1;
}

// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}