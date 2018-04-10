const insertionSort = array => {

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        let spliced = array.splice(i, 1);
        array.splice(j, 0, spliced[0]);
      }
    }
  }

  return array;
};