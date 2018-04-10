// set vars 'middle', 'left' and 'right'
// base case array.length < 2
// return recursive function passing in left and right
// create merge function and empty array
// while loop, if left[0] < right[0]
// array.push(left.shift())
// return array

const mergeSort = array => {
  let x = array.length,
    middle = Math.floor(x / 2),
    left = array.slice(0, middle),
    right = array.slice(middle);

  if (x < 2) return array;

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let array = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) array.push(left.shift());
    else array.push(right.shift());
  }

  return [...array, ...left, ...right];
};