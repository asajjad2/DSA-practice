function canTwoMoviesFillFlight(movieLengths, flightLength) {

    // Determine if two movie runtimes add up to the flight length

    //check if there are any movie < or atleast = to flightlength
    if(!movieLengths.find(item => item <= flightLength))
        return false;

    //could do double for loop find a pair that matches
    // for(let i = 0; i < movieLengths.length; i++){
    //   for(let j = 0; j < movieLengths.length; j++){
    //     if(movieLengths[i] + movieLengths[j] === flightLength)
    //       return true;
    //   }
    // }

    //make a hashmap of remainingTime and movieindex, singleloop, check if remainingTime != -1

    //can also use a set instead of a hashmap -

    // const movieLengthsSeen = new Set();
    // movieLengthsSeen.add(firstMovieLength);
    // movieLengthsSeen.has(matchingSecondMovieLength);


    let hashmap = [];
    movieLengths.forEach((item, index) => {
        hashmap[item] = index
    });

    let firstMovieLength, secondMovieLength;

    for(let i = 0; i < movieLengths.length; i++){
        
        let firstMovieLength = movieLengths[i];
        secondMovieLength = flightLength - firstMovieLength;
        
        if(hashmap[secondMovieLength] && hashmap[secondMovieLength] != i)
        return true
    }

    return false;
}

// Tests

let desc = 'short flight';
let actual = canTwoMoviesFillFlight([2, 4], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'long flight';
actual = canTwoMoviesFillFlight([2, 4], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one movie half flight length';
actual = canTwoMoviesFillFlight([3, 8], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'two movies half flight length';
actual = canTwoMoviesFillFlight([3, 8, 3], 6);
expected = true;
assertEquals(actual, expected, desc);

desc = 'lots of possible pairs';
actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
expected = true;
assertEquals(actual, expected, desc);

desc = 'not using first movie';
actual = canTwoMoviesFillFlight([4, 3, 2], 5);
expected = true;
assertEquals(actual, expected, desc);

desc = 'multiple movies shorter than flight';
actual = canTwoMoviesFillFlight([5, 6, 7, 8], 9);
expected = false;
assertEquals(actual, expected, desc);

desc = 'only one movie';
actual = canTwoMoviesFillFlight([6], 6);
expected = false;
assertEquals(actual, expected, desc);

desc = 'no movies';
actual = canTwoMoviesFillFlight([], 2);
expected = false;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
}