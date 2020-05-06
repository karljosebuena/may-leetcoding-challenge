// PROBLEM: Majority Element
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

module.exports = () => {
    /**
     * @param {number[]} nums
     * @return {number}
     * Runtime: 76 ms
     */
    var majorityElement = function (nums) {
        const resObj = {};
        for (let index = 0; index < nums.length; index++) {
            if (nums[index].toString() in resObj)
                resObj[nums[index]] = ++resObj[nums[index]];
            else
                resObj[nums[index]] = 1;
        }
        return Object.entries(resObj).find(item => item[1] === Object.values(resObj).sort((a, b) => a - b).reverse()[0])[0];
    };
    return { majorityElement };
}