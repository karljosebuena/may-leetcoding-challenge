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
        let canConstruct = true;
        const ransomNoteArr = ransomNote.split('').sort();
        const magazineArr = magazine.split('').sort();

        ransomNoteArr.map(element => {
            if (magazineArr.find(item => item === element)) {
                const indexToDelete = magazineArr.findIndex(item => item === element);
                magazineArr.splice(indexToDelete, 1);
            }
            else canConstruct = false
        });

        return canConstruct
    };

    return {
        canConstruct
    }
}