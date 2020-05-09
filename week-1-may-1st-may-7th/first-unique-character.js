// PROBLEM: First Unique Character in a String
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.

// Note: You may assume the string contain only lowercase letters.

// Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3320/

module.exports = () => {
    /**
     * @param {string} s
     * @return {number}
     */
    var firstUniqChar = function (s) {
        // Runtime: 9321 ms
        // let result = [];
        // for (let index = 0; index < s.length; index++) {
        //     const rgxp = new RegExp(s[index], "g");
        //     result = s.match(rgxp);
        //     if (result.length === 1)
        //         return index;
        // }
        // return -1

        // Runtime: 8952 ms
        for (let index = 0; index < s.length; index++) {
            const regx = new RegExp(s[index],"g");
            if (s.match(regx).length === 1) return index;
        }
        return -1;
    };
    return { firstUniqChar }
}