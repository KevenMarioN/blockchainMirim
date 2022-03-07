import { SHA256 } from "crypto-js";
import { Cripto } from "../interfaces/Cripto";


class Block {

  index: number;
  data: Cripto;
  timestamp: Date;
  hash: string;
  previousHash: string;

  constructor(index = 0, previousHash = null, data = {
    from: 'Genesis',
    to: 'Genesis',
    amount: 0
  }) {
    this.index = index;
    this.data = data;
    this.timestamp = new Date();
    this.previousHash = previousHash;
    this.hash = this.generateHash();
  }
  generateHash(): string {
    return SHA256(String(this.index) + this.previousHash + JSON.stringify(this.data) + this.timestamp).toString();
  }


}

export default Block;