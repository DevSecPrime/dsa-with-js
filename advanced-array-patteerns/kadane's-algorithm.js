//Leet-code 53:  Given an integer array nums, find the subarray with the largest sum, and return its sum.
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let sum = 0;
let MAX = -Infinity;
for (let i = 0; i < arr.length - 1; i++) {
  sum = sum + arr[i];
  //   MAX = Math.max(MAX, sum);
  if (sum > MAX) {
    MAX = sum;
  }

  if (sum < 0) {
    sum = 0;
  }
  //   sum = Math.max(sum, 0);
}

console.log({ sum });
console.log({ MAX });
