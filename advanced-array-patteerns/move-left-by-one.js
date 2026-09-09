// Move one element left by one
console.log("Move one element left by one");
const arr = [1, 2, 3, 4, 5];

console.log("here is the original array: ", arr);

let copy = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}

arr[arr.length - 1] = copy;

//By using array
// arr.shift();
// arr.push(copy);

console.log("Output: ", arr);
