// PROBLEM: Ransom Note
// Given an arbitrary ransom note string and another string containing letters from all the magazines,
// write a function that will return true if the ransom note can be constructed from the magazines ;
// otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

module.exports = () => {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    var canConstruct = function (ransomNote, magazine) {
        // SOLUTION 1:
        // Runtime: 1740 ms in leetcode
        // let canConstruct = true;
        // const ransomNoteArr = ransomNote.split('').sort();
        // const magazineArr = magazine.split('').sort();

        // ransomNoteArr.map(element => {
        //     if (magazineArr.find(item => item === element)) {
        //         const indexToDelete = magazineArr.findIndex(item => item === element);
        //         magazineArr.splice(indexToDelete, 1);
        //     }
        //     else canConstruct = false
        // });
        // return canConstruct

        // SOLUTION 2:
        // Runtime: 964 ms in leetcode
        // const ransomNoteArr = ransomNote.split('').sort();
        // const magazineArr = magazine.split('').sort();
        // let canConstruct = true;
        // let indexToDelete = -1;
        // ransomNoteArr.map(element => {
        //     indexToDelete = magazineArr.findIndex(item => item === element);
        //     if (indexToDelete > -1) {
        //         magazineArr.splice(indexToDelete, 1);
        //     }
        //     else return canConstruct = false;
        // });
        // return canConstruct;

        // SOLUTION 3.a:
        // Runtime: 76 ms in leetcode
        // let newMaganize = magazine;
        // for (let index = 0; index < ransomNote.length; index++) {
        //     newMaganize = newMaganize.replace(ransomNote[index], '1');
        // }
        // const foundLetters = newMaganize.match(/1/g) || [];
        // return ransomNote.length === foundLetters.length;

        // SOLUTION 3.b:
        // Runtime: 64 ms in leetcode
        let newMaganize = magazine;
        for (let index = 0; index < ransomNote.length; index++) {
            newMaganize = newMaganize.replace(ransomNote[index], '');
        }
        return ransomNote.length + newMaganize.length === magazine.length;
    };

    return {
        canConstruct
    }
}