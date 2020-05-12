// PROBLEM: Single Element in a Sorted Array

// You are given a sorted array consisting of only integers where every element appears exactly twice,
// except for one element which appears exactly once. Find this single element that appears only once.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2

// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10

// Note: Your solution should run in O(log n) time and O(1) space.

// Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3327/

module.exports = () => {
    /**
     * @param {number[]} nums
     * @return {number}
     *  Did not pass the time and space complexity
     */
    var singleNonDuplicate = function (nums) {
        return nums.find(number => nums.toString().match(new RegExp(number, 'g')).length === 1);
    };
    return { singleNonDuplicate }
}