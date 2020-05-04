// Instance of solution to Jewel and Stone problem
const jewelsAndStones = require('./week-1-may-1st-may-7th/jewels-and-stones')();
const jewels = jewelsAndStones.numJewelsInStones('aA', 'aAAbbbb');
// console.log(jewels);

// Instance of solution to Ransom Note problem
const ransomNote = require('./week-1-may-1st-may-7th/ransom-note')();
const canConstructRansom = ransomNote.canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi');
// console.log(canConstructRansom);

// Instance of solution to Number Complement problem
const  numberComplement = require('./week-1-may-1st-may-7th/number-complement')();
const result = numberComplement.findComplement(5);
console.log(result)