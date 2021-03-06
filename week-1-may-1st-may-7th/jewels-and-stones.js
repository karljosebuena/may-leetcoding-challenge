
// PROBLEM: Jewels and Stones
// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.
// Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters.Letters are case sensitive,
// so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

// Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3317/

module.exports = () => {
    /**
     * @param {string} J
     * @param {string} S
     * @return {number}
     * Runtime: 56 ms in leetcode
     */
    var numJewelsInStones = function (J, S) {
        const jewelsArray = J.split('');
        const stonesArray = S.split('');
        let jewelStones = 0;
        jewelsArray.forEach(jewel => {
            jewelStones += stonesArray.filter(stone => stone === jewel).length;
        });
        return jewelStones;
    };

    return {
        numJewelsInStones
    }
}