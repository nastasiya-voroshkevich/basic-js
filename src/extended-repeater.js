const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = String(str);
  let separator = "+";
  options.separator !== undefined ? (separator = options.separator) : separator;
  let additionSeparator = "|";
  options.additionSeparator !== undefined
    ? (additionSeparator = options.additionSeparator)
    : additionSeparator;

  let repeatTimes = 0;
  options.repeatTimes !== undefined
    ? (repeatTimes = options.repeatTimes)
    : repeatTimes;
  let additionRepeatTimes = 0;
  options.additionRepeatTimes !== undefined
    ? (additionRepeatTimes = options.additionRepeatTimes)
    : additionRepeatTimes;

  let addition = "";
  options.addition !== undefined ? (addition = options.addition) : addition;

  let fullAddition = "";
  let fullString = "";
  let j = 1;
  while (j < additionRepeatTimes) {
    fullAddition += addition + additionSeparator;
    j++;
  }

  fullAddition += addition;

  let i = 1;
  while (i < repeatTimes) {
    fullString += result + fullAddition + separator;
    i++;
  }
  fullString += result + fullAddition;

  return fullString;
}

module.exports = {
  repeater,
};
