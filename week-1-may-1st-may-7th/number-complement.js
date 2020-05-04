// PROBLEM:  Number Complement
// Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

// Example 1:
// Input: 5
// Output: 2
// Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

// Example 2:
// Input: 1
// Output: 0
// Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

// Note:
// The given integer is guaranteed to fit within the range of a 32-bit signed integer.
// You could assume no leading zero bit in the integer’s binary representation.
// This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/

module.exports = () => {
/**
 * @param {number} num
 * @return {number}
 */
    var findComplement = function (num) {
        const binaryNum = num.toString(2);
        const firstReplace = binaryNum.replace(/1/g, 'e'); // temporarily repalce 1s with e, so we can  reference it later without affecting the current 0s
        const secondReplace = firstReplace.replace(/0/g, '1');
        const finalReplace = secondReplace.replace(/e/g, '0'); // now, convert all e to 0
        return parseInt(finalReplace, 2);
    };

    return {
        findComplement
    }
}