import Block from "./Block";
class Blockchain {

  blocks: Block[];
  private nextIndex = 1;
  constructor() {
    this.blocks = [new Block()];
    this.nextIndex = 1;
  }
  getLastHash(){
    return this.blocks[this.blocks.length -1].hash
  }

  addBlock(data: Cripto) {
    const lastHash = this.getLastHash();
    const block = new Block(this.nextIndex,lastHash,data)
    this.blocks.push(block);
    this.nextIndex++;
  }
}

export default Blockchain;