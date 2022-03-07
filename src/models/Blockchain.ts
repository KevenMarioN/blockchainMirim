import { Cripto } from "../interfaces/Cripto";
import Block from "./Block";
class Blockchain {

  blocks: Block[];
  private nextIndex = 1;
  constructor() {
    this.blocks = [new Block()];
    this.nextIndex = 1;
  }
  getLastHash() {
    return this.blocks[this.blocks.length - 1].hash
  }

  addBlock(data: Cripto) {
    const lastHash = this.getLastHash();
    const block = new Block(this.nextIndex, lastHash, data)
    this.blocks.push(block);
    this.nextIndex++;
  }

  isValid() {
    for (let i = this.blocks.length - 1; i > 0; i--) {
      const currentBlock = this.blocks[i];
      const previousBlock = this.blocks[i - 1];
      console.log(currentBlock.hash)
      if (currentBlock.hash !== currentBlock.generateHash() ||
        currentBlock.previousHash !== previousBlock.hash ||
        currentBlock.index !== previousBlock.index + 1) {
        return false;
      }
    }
    return true;
  }
}

export default Blockchain;