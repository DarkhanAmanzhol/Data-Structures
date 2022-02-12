const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++) {
    let minValue = Number.MAX_VALUE;
    let temp;
    let index;
    for(let j = i; j < length; j++) {
      if (array[j] < minValue) {
        temp = array[i];
        index = j;
        minValue = array[j];
      }
    }
    array[i] = minValue;
    array[index] = temp;
  }
  return array;
}

console.log(selectionSort(numbers));