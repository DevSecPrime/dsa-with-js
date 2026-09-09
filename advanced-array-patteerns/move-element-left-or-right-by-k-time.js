// //Move element left or right by k element
// // Suppose k is given 2 by user
//
// console.log("Move element left or right by k element");
// console.log("Suppose k is given 2 by user");

// let k = 2;

// let arr = [1, 2, 3, 4, 5];
// k = k%arr.length // which will give the accurate index value
// console.log("arr: ", arr);

// //Let move by - 2
// for (let i = 0; i < k; i++) {
//   let copy = arr[0];

//   for (let j = 0; j < arr.length - 1; j++) {
//     arr[j] = arr[j + 1];
//   }

//   arr[arr.length - 1] = copy;
// }

// console.log("left move output: ", arr);

// //Right move by - 2
// arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < k; i++) {
//   let copy = arr[arr.length - 1];

//   for (let j = arr.length - 1; j > 0; j--) {
//     arr[j] = arr[j - 1];
//   }

//   arr[0] = copy;
// }

// console.log("right move output: ", arr);

let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;

console.log("------- LEFT MOVE --------");
console.log({ k });
function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

//1: reverse. -> 0,k-1 length
reverse(0, k - 1);

// //2: reverse. -> k,arr.length-1  length
reverse(k, arr.length - 1);

// //3: reverse. -> 0,arr.length-1  length
reverse(0, arr.length - 1);

console.log("LEFT MOVE OUTOUT: ", arr);
console.log("------- RIGHT MOVE --------");
console.log({ k });
arr = [1, 2, 3, 4, 5];

// 1. reverse ---> 0,arr.length -1
reverse(0, arr.length - 1);

//2. reverse ----> 0, k-1
reverse(0, k - 1);

//3 reverse ----> k, arr.length -1
reverse(k, arr.length - 1);

console.log("RIGHT MOVE OUTOUT: ", arr);
