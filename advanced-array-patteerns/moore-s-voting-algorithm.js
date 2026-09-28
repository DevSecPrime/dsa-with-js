// Given an array nums, find the majority element.
// The majority element appears more than n / 2 times.

// Moore's Voting Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)

const arr = [2, 2, 1, 1, 1, 2, 2];

// Start with the first element as the candidate.
// count represents the current candidate's "vote balance".
let ans = arr[0];
let count = 1;

for (let i = 1; i < arr.length; i++) {
  // If count becomes 0, it means the previous candidate
  // has been completely cancelled out by different elements.
  // So, choose the current element as the new candidate.
  if (count === 0) {
    ans = arr[i];
    count = 1;
  }

  // If the current element is the same as our candidate,
  // it supports the candidate, so increase the count.
  else if (arr[i] === ans) {
    count++;
  }

  // If the current element is different from our candidate,
  // it cancels out one vote of the candidate.
  else {
    count--;
  }
}

console.log({ ans });
