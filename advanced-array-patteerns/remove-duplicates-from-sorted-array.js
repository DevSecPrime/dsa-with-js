//Removed duplicates from the sorted array

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// two pointer approach i, j

function removeDuplicates(arr) {
  let j = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i + 1];
      j++;
    }
  }
  return j;
}
console.log({ removeDuplicates: removeDuplicates(arr) });
