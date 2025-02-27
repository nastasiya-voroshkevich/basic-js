const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let newMatrix = matrix;
  let sum =0;
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[0].length; j++) {
      if (newMatrix[i][j] === 0 && i < newMatrix.length - 1) {
        newMatrix[i + 1][j] = 0;
      }
    }
  }
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[0].length; j++) {
    sum += newMatrix[i][j];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
