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
console.time('numberComplement');
const  numberComplement = require('./week-1-may-1st-may-7th/number-complement')();
const result = numberComplement.findComplement(2);
console.log(result);
console.timeEnd('numberComplement');