//Sort the color
const arr = [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1];
// [2, 0, 2, 1, 1, 0];
// [0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1];
// [2, 0, 2, 1, 1, 0];

let i = 0;
let j = 0;
let k = arr.length - 1;

while (i <= k) {
  if (arr[i] === 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    i++;
    j++;
  } else if (arr[i] === 1) {
    i++;
  } else if (arr[i] === 2) {
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;

    k--;
  }
}

console.log("arr: ", arr);
