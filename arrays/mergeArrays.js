function mergeArrays(myArray, alicesArray) {

    // Combine the sorted arrays into one large sorted array
    if(!myArray.length)
        return alicesArray;

    if(!alicesArray.length)
        return myArray;

    let largeArray = [];
    let i = j = counter = 0

    while(i < myArray.length || j < alicesArray.length ){
        
        if(myArray[i] < alicesArray[j]){
        
        largeArray.push(myArray[i])
        i++
        
        } else if(alicesArray[j] < myArray[i]){
        
        largeArray.push(alicesArray[j])
        j++
        
        } else if(i == myArray.length){
        
        for(; j < alicesArray.length; j++)
            largeArray.push(alicesArray[j])
        
        } else if(j == alicesArray.length){
        
        for(; i < myArray.length; i++)
            largeArray.push(myArray[i])
            
        }
        
    }

    return largeArray;
}

// could be done this way but it's not as efficient, it's O(nlogn) instead of O(n) because of the sort
// const mergeArrays = (myArray, alicesArray) => {
//     myArray = myArray.concat(alicesArray);
//     return myArray.sort();
// }

// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
    const aStr = JSON.stringify(a);
    const bStr = JSON.stringify(b);
    if (aStr !== bStr) {
        console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
    } else {
        console.log(`${desc} ... PASS`);
    }
}