/**
 * Merge nums2 into nums1 in-place.
 *
 * nums1 has:
 *   - first m elements as actual values
 *   - last n elements as empty space (shown as 0)
 *
 * nums2 has n actual values.
 *
 * We merge from RIGHT → LEFT so that we don't overwrite
 * the existing elements of nums1.
 */
function merge(nums1, m, nums2, n) {
  // i = last valid element of nums1
  let i = m - 1;

  // j = last element of nums2
  let j = n - 1;

  // k = last available position in nums1
  let k = m + n - 1;

  /*
   * Example:
   *
   * nums1 = [1, 2, 3, 0, 0, 0]
   * nums2 = [2, 5, 6]
   *
   * Initially:
   *
   * i = 2 → nums1[i] = 3
   * j = 2 → nums2[j] = 6
   * k = 5 → nums1[k] is where we write
   *
   *             i
   *             ↓
   * nums1 = [1, 2, 3, 0, 0, 0]
   *                     ↑
   *                     k
   *
   * nums2 = [2, 5, 6]
   *               ↑
   *               j
   */

  while (i >= 0 && j >= 0) {
    // Put the larger value at the end.
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];

      i--;
    } else {
      nums1[k] = nums2[j];

      j--;
    }

    k--;
  }

  /*
   * If nums2 still has elements,
   * they must be smaller than or equal to
   * the elements already placed in nums1.
   *
   * Example:
   *
   * nums1 = [4, 5, 6, 0, 0, 0]
   * nums2 = [1, 2, 3]
   *
   * nums1 elements will be exhausted first.
   *
   * nums2 still contains [1, 2, 3],
   * so copy them into nums1.
   */
  while (j >= 0) {
    nums1[k] = nums2[j];

    j--;
    k--;
  }
}

let nums1 = [1, 2, 3, 0, 0, 0]; //[1, 2, 3, _, _, _] -- ) consider it as space
let nums2 = [2, 5, 6];

merge(nums1, 3, nums2, 3);

console.log(nums1);
// [1, 2, 2, 3, 5, 6]

nums1 = [1];
nums2 = [];

merge(nums1, 1, nums2, 0);

console.log(nums1);
// [1]

nums1 = [0];
nums2 = [1];

merge(nums1, 0, nums2, 1);

console.log(nums1);
// [1]
