const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let getDeep =1;
  
    for(let i in arr) {
          if (typeof arr[i] === 'object') {
          let deep = this.calculateDepth(arr[i]) + 1;
          if(deep > getDeep) {
            getDeep = deep
          }
        } 
      
      }
    
      return  getDeep;
    }
}
module.exports = {
  DepthCalculator
};
