// Instance of solution to Jewel and Stone problem
// console.time('jewelsAndStones');
// const jewelsAndStones = require('./week-1-may-1st-may-7th/jewels-and-stones')();
// const jewels = jewelsAndStones.numJewelsInStones('aA', 'aAAbbbb');
// console.log(jewels);
// console.timeEnd('jewelsAndStones');

// Instance of solution to Ransom Note problem
// console.time('ransomNote');
// const ransomNote = require('./week-1-may-1st-may-7th/ransom-note')();
// const canConstructRansom = ransomNote.canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi');
// console.log(canConstructRansom);
// console.timeEnd('ransomNote');

// Instance of solution to Number Complement problem
// console.time('numberComplement');
// const  numberComplement = require('./week-1-may-1st-may-7th/number-complement')();
// const result = numberComplement.findComplement(2);
// console.log(result);
// console.timeEnd('numberComplement');

// Instance of solution to First Unique Character in a String problem
// console.time('firstUniqueChar');
// const  firstUniqueChar = require('./week-1-may-1st-may-7th/first-unique-character')();
// const charIndex = firstUniqueChar.firstUniqChar("xx");
// console.log(charIndex);
// console.timeEnd('firstUniqueChar');

// Instance of solution to Majority Element problem
console.time('majorityElement');
const  majorityElementService = require('./week-1-may-1st-may-7th/majority-element')();
const result = majorityElementService.majorityElement([11,11,2]);
console.log(result);
console.timeEnd('majorityElement');