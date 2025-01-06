const { NotImplementedError } = require("../extensions/index.js");

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split("-");
  for (let i in arr) {
    if (arr[i].match(/^[A-F0-9]{2}$/)) {
      arr[i] = true;
    } else {
      arr[i] = false;
    }
  }
  if (arr.filter((el) => el === false).length === 0 && arr.length === 6) {
    return true;
  }
  return false;
}
module.exports = {
  isMAC48Address,
};
