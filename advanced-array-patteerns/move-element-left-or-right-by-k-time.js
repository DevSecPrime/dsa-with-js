//Move element left or right by k element
// Suppose k is given 2 by user

console.log("Move element left or right by k element");
console.log("Suppose k is given 2 by user");

const k = 2;
let arr = [1, 2, 3, 4, 5];

console.log("arr: ", arr);

//Let move by - 2
for (let i = 0; i < k; i++) {
  let copy = arr[0];

  for (let j = 0; j < arr.length - 1; j++) {
    arr[j] = arr[j + 1];
  }

  arr[arr.length - 1] = copy;
}

console.log("left move output: ", arr);

//Right move by - 2
arr = [1, 2, 3, 4, 5];
for (let i = 0; i < k; i++) {
  let copy = arr[arr.length - 1];

  for (let j = arr.length - 1; j > 0; j--) {
    arr[j] = arr[j - 1];
  }

  arr[0] = copy;
}

console.log("right move output: ", arr);
