// PROBLEM: Valid Perfect Square
// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:
// Input: 16
// Output: true

// Example 2:
// Input: 14
// Output: false

// Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3324/

module.exports = () => {
    /**
     * @param {number} num
     * @return {boolean}
     */
    var isPerfectSquare = function (num) {
        // Runtime: 48 ms
        let result = false;
        for (let i = 1; i * i <= num; i++) {
            if (i * i === num) return true;
        }
        return result;
    };

    return { isPerfectSquare }
}