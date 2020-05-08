// PROBLEM: Check If It Is a Straight Line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
// Check if these points make a straight line in the XY plane.

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:
//     2 <= coordinates.length <= 1000
//     coordinates[i].length == 2
//     -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
//     coordinates contains no duplicate point.

// Link: https://leetcode.com/explore/challenge/card/may-leetcoding-challenge/535/week-2-may-8th-may-14th/3323/

module.exports = () => {
    /**
     * @param {number[][]} coordinates
     * @return {boolean}
     * Slore equation slope=(y2-y1)/(x2-x1)
     * Runtime: 64 ms
     */
    var checkStraightLine = function (coordinates) {
        const getSlope = (p1, p2) => {
            return parseFloat((p2[1] - p1[1]) / (p2[0] - p1[0]));
        }
        const baseSlope = getSlope(coordinates[1], coordinates[0]);

        for (let index = 2; index < coordinates.length; index++) {
            if (baseSlope !== getSlope(coordinates[index], coordinates[0]))
                return false;
        }
        return true;
    };

    return { checkStraightLine }
}