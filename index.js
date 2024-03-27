
// create arrays with a set of cat names as elements
const cats = ["Milo", "Otis", "Garfield"];

// use .push() to add the cat name Ralph at the end of the cats array
function destructivelyAppendCat (name) {
    return cats.push ('Ralph');
}

// use .unshift() to add the cat name Bob at the begining of the cats array
function destructivelyPrependCat (name) {
    return cats.unshift ('Bob');
}

// destructively remove the last cat from the array
function destructivelyRemoveLastCat (name) {
    return cats.pop(-1);
}

// destructively remove the first cat from the array
function destructivelyRemoveFirstCat (name) {
    return cats.shift (0);
}

// create a new array appendCat by adding Broom to the beginning of the 'cats' array
//using spread operator
function appendCat (name) {
    return [...cats, name];
    
}

// create a new array 'prependCat' by adding 'Arnold' to the end of the 'cats' array
// 
function prependCat (name) {
    return [name , ...cats];
}

// remove the last cat from the array without changing the original array
function removeLastCat () {
    return [...cats.slice (0,2)]
}

// remove the first cat from the array without changing the original array
function removeFirstCat () {
    return [...cats.slice (1)]
}