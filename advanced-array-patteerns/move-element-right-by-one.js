// Move one element right by one
console.log("Move one element Right by one");
const arr = [1, 2, 3, 4, 5];

console.log("here is the original array: ", arr);
let copy = arr[arr.length - 1];

//By using array method
// arr.pop();
// arr.unshift(copy);

for (i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = copy;
console.log("Output: ", arr);
