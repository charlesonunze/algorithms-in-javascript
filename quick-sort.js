// set vars pivot, left, right
// base case
// for loop
// if statement, if current element is less than pivot, push to left, else push to right
// return joined array using spread operator

const quickSort = array => {
  let x = array.length,
    pivot = array[x - 1],
    left = [],
    right = [];

  if (x <= 1) return array;

  for (var i = 0; i < x - 1; i++) {
    let y = array[i];
    if (y < pivot) left.push(y);
    else right.push(y);
  }
  // console.log(pivot);
  // console.log(left);
  // console.log(right);
  // quickSort(left);
  // quickSort(right);
  return [...quickSort(left), pivot, ...quickSort(right)];
};

array = [1, 6, 4, 8, 9, 8, 3, 5];
quickSort(array);