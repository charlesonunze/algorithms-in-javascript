// set vars 'swapped' and 'temporary'
// do while loop
// set swapped to false
// for loop
// if statement
// set temporary, then swapped to true

const bubbleSort = array => {
  let swapped, temporary;

  do {
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        temporary = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temporary;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
};

bubbleSort([2, 0, 10, 9, 8, 7, 6, 5, 4, 3, 1]);