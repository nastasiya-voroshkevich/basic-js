const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    let arr = String(n).split("").map(i => Number(i));
    let result =0;
    for (let index = arr.length -1; index >= 0; index--) {
      let number =0;
      for(let i =0; i< arr.length; i++) {
        if (i !== index) {
          number = number *10 + arr[i];
        }
      }
      result = Math.max(number, result);
    }
   return result; 
}

module.exports = {
  deleteDigit
};
