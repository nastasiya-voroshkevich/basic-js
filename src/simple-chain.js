const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arrChain: [],
  getLength() {
    return this.arrChain.length;
  },
  addLink(value) {
    this.arrChain.push("( " + value + " )");
    return this;
  },
  removeLink(position) {
    if (    
      position >= this.arrChain.length ||
      position <= 0 ||
      !Number.isInteger(position)
    ) {
      this.arrChain = [];
      throw new Error("You can't remove incorrect link!");
      
    } else {
      this.arrChain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    const result = this.arrChain.join("~~");
    this.arrChain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
