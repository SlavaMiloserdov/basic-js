const chainMaker = {
  chain: [],
  getLength() {
    let temp = this.chain.length;
    this.chain = [];
    return temp;
  },
  addLink(value) {
    this.chain.push(`( ${"" + value || " "} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length ||
      this.chain[position - 1] === undefined
    ) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let temp = JSON.parse(JSON.stringify(this.chain.join("~~")));
    this.chain = [];
    return temp;
  }
};

module.exports = chainMaker;
