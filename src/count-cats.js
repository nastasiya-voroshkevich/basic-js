const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = [];
  let array = ["^^"];
  function recurs(arr1) {
    for (let i = 0; i < arr1.length; i++) {
      if (!Array.isArray(arr1[i])) {
        if (array.includes(arr1[i])) {
          arr.push(arr1[i]);
        }
      } else { recurs(arr1[i]); }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i])) {
      recurs(matrix[i]);
    }

  }
  return arr.length;
}

module.exports = {
  countCats
};
