const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let mapDomains = domains.map((el) => {
    return el.split(".").reverse();
  });

  for (let mapDomain of mapDomains) {
    let str = "";
    for (let i in mapDomain) {
      str = str + "." + mapDomain[i];
      obj[str] ? (obj[str] = obj[str] + 1) : (obj[str] = 1);
    }
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
